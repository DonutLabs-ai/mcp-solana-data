import { McpAgent } from "agents/mcp";
import { OAuthProvider } from "@cloudflare/workers-oauth-provider";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SolanaAgentKit, KeypairWallet, Action } from "solana-agent-kit";
import TokenPlugin from "@solana-agent-kit/plugin-token";
import MiscPlugin from "@solana-agent-kit/plugin-misc";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { DonutPlugin } from "./plugin/index";
import { zodToMCPShape } from "@solana-agent-kit/adapter-mcp";

interface Env {
  SOLANA_RPC_URL: string;
  COINGECKO_DEMO_API_KEY: string;
}

interface Props {
  [key: string]: unknown;
}

export class MyMCP extends McpAgent<Env, unknown, Props> {
  server = new McpServer({
    name: "Donut Solana Agent",
    version: "1.0.0",
  });

  env = this.env as Env;
  props = this.props as Props;

  async init() {
    // Note this is a unused private key, do not use a real private key
    const keypair = Keypair.fromSecretKey(
      bs58.decode(
        "3py5JaxcRQAP4McHFtoarMbsSKLgT9DaxqFGNhywT4qviZ9wFbz5N9e6P6tWdLqwpD3zaABnXcXSkiRKcaCay9ec",
      ),
    );
    const wallet = new KeypairWallet(
      keypair,
      this.env.SOLANA_RPC_URL! || "https://api.mainnet-beta.solana.com",
    );

    // Create agent with plugin
    const agent = new SolanaAgentKit(
      // Note this is a unused private key, do not use a real private key
      wallet,
      this.env.SOLANA_RPC_URL! || "https://api.mainnet-beta.solana.com",
      {
        COINGECKO_DEMO_API_KEY: this.env.COINGECKO_DEMO_API_KEY! || "",
      },
    )
      .use(TokenPlugin)
      .use(MiscPlugin)
      .use(DonutPlugin);

    const finalActions: Record<string, Action> = {
      TOKEN_DATA: agent.actions.find(
        (action) => action.name === "GET_TOKEN_DATA",
      )!,
      RUGCHECK: agent.actions.find((action) => action.name === "RUGCHECK")!,
      GET_PRICE: agent.actions.find((action) => action.name === "FETCH_PRICE")!,
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
