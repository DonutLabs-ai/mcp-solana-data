import { SolanaAgentKit, KeypairWallet } from "solana-agent-kit";
import { startMcpServer } from "@solana-agent-kit/adapter-mcp";
import TokenPlugin from "@solana-agent-kit/plugin-token";
import MiscPlugin from "@solana-agent-kit/plugin-misc";
import { Keypair } from "@solana/web3.js";
import * as dotenv from "dotenv";
import bs58 from "bs58";
import { DonutPlugin } from "./plugin/index";

// Load environment variables
dotenv.config();

// Note this is a unused private key, do not use a real private key
const keypair = Keypair.fromSecretKey(
  bs58.decode(
    "3py5JaxcRQAP4McHFtoarMbsSKLgT9DaxqFGNhywT4qviZ9wFbz5N9e6P6tWdLqwpD3zaABnXcXSkiRKcaCay9ec",
  ),
);
const wallet = new KeypairWallet(
  keypair,
  process.env.RPC_URL! || "https://api.mainnet-beta.solana.com",
);

// Create agent with plugin
const agent = new SolanaAgentKit(
  // Note this is a unused private key, do not use a real private key
  wallet,
  process.env.RPC_URL! || "https://api.mainnet-beta.solana.com",
  {
    COINGECKO_DEMO_API_KEY: process.env.COINGECKO_DEMO_API_KEY! || "",
    HELIUS_API_KEY: process.env.HELIUS_API_KEY! || "",
  },
)
  .use(TokenPlugin)
  .use(MiscPlugin)
  .use(DonutPlugin);

// Select which actions to expose to the MCP server
const finalActions = {
  TOKEN_DATA: agent.actions.find((action) => action.name === "GET_TOKEN_DATA")!,
  GET_PRICE: agent.actions.find((action) => action.name === "FETCH_PRICE")!,
  GET_BALANCE_OWNER: agent.actions.find(
    (action) => action.name === "TOKEN_BALANCE_ACTION",
  )!,
  GET_TRENDING_TOKENS: agent.actions.find(
    (action) => action.name === "GET_COINGECKO_TRENDING_TOKENS_ACTION",
  )!,
  GET_JUPITER_QUOTE: agent.actions.find(
    (action) => action.name === "GET_JUPITER_QUOTE",
  )!,
};

// Start the MCP server
startMcpServer(finalActions, agent, { name: "solana-agent", version: "0.0.1" });
