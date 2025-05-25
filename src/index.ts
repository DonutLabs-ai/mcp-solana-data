import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SolanaAgentKit, Action, BaseWallet } from "solana-agent-kit";
import TokenPlugin from "@solana-agent-kit/plugin-token";
import MiscPlugin from "@solana-agent-kit/plugin-misc";
import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";
import { DonutPlugin } from "./plugin/index";
import { zodToMCPShape } from "@solana-agent-kit/adapter-mcp";

interface Env {
  SOLANA_RPC_URL: string;
  COINGECKO_DEMO_API_KEY: string;
  SOLSNIFFER_API_KEY: string;
}

interface Props {
  [key: string]: unknown;
}

function mockWalletThrowMessaage(): any {
  throw "mockBaseWallet cannot sign transactions";
}

/**
 * A mock wallet implementation that cannot sign transactions
 */
const mockBaseWallet: BaseWallet = {
  publicKey: PublicKey.default,
  signTransaction: <T extends Transaction | VersionedTransaction>(_tx: T) =>
    mockWalletThrowMessaage(),
  signMessage: (_message: Uint8Array) => mockWalletThrowMessaage(),
  signAllTransactions: <T extends Transaction | VersionedTransaction>(
    _transactions: T[],
  ) => mockWalletThrowMessaage(),
  signAndSendTransaction: (_tx: Transaction | VersionedTransaction) =>
    mockWalletThrowMessaage(),
};

export class MyMCP extends McpAgent<Env, unknown, Props> {
  server = new McpServer({
    name: "Donut Solana Agent",
    version: "1.0.0",
  });

  env = this.env as Env;
  props = this.props as Props;

  async init() {
    // Create agent with plugin
    const agent = new SolanaAgentKit(
      // Note this is a unused private key, do not use a real private key
      mockBaseWallet,
      this.env.SOLANA_RPC_URL! || "https://api.mainnet-beta.solana.com",
      {
        COINGECKO_DEMO_API_KEY: this.env.COINGECKO_DEMO_API_KEY! || "",
        OTHER_API_KEYS: {
          SOLSNIFFER_API_KEY: this.env.SOLSNIFFER_API_KEY! || "",
        },
      },
    )
      .use(TokenPlugin)
      .use(MiscPlugin)
      .use(DonutPlugin);

    const finalActions: Record<string, Action> = {
      GET_BALANCE_OWNER: agent.actions.find(
        (action) => action.name === "TOKEN_BALANCE_ACTION",
      )!,
      GET_TRENDING_TOKENS: agent.actions.find(
        (action) => action.name === "GET_COINGECKO_TRENDING_TOKENS_ACTION",
      )!,
      TRANSFER_UNSIGNED: agent.actions.find(
        (action) => action.name === "TRANSFER_UNSIGNED",
      )!,
      GET_JUPITER_QUOTE: agent.actions.find(
        (action) => action.name === "GET_JUPITER_QUOTE",
      )!,
      GET_JUPITER_UNSIGNED_SWAP: agent.actions.find(
        (action) => action.name === "GET_JUPITER_UNSIGNED_SWAP",
      )!,
      GET_TOKEN_LIST: agent.actions.find(
        (action) => action.name === "GET_TOKEN_LIST",
      )!,
      GET_TOKEN_MARKET_INFO_BATCH: agent.actions.find(
        (action) => action.name === "GET_TOKEN_MARKET_INFO_BATCH",
      )!,
      GET_TOKEN_INFO: agent.actions.find(
        (action) => action.name === "GET_TOKEN_INFO",
      )!,
      DONUT_RUGCHECK: agent.actions.find(
        (action) => action.name === "DONUT_RUGCHECK",
      )!,
      SOLSNIFFER_RUGCHECK: agent.actions.find(
        (action) => action.name === "SOLSNIFFER_RUGCHECK",
      )!,
    };

    for (const [_, action] of Object.entries(finalActions)) {
      const { result } = zodToMCPShape(action.schema);

      this.server.tool(
        action.name,
        action.description,
        result,
        async (params) => {
          try {
            const result = await action.handler(agent, params);
            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          } catch (error) {
            console.error("error", error);
            // Handle errors in MCP format
            return {
              isError: true,
              content: [
                {
                  type: "text",
                  text:
                    error instanceof Error
                      ? error.message
                      : "Unknown error occurred",
                },
              ],
            };
          }
        },
      );
    }
  }
}

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      // @ts-ignore
      return MyMCP.serveSSE("/sse").fetch(request, env, ctx);
    }

    if (url.pathname === "/mcp") {
      // @ts-ignore
      return MyMCP.serve("/mcp").fetch(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};
