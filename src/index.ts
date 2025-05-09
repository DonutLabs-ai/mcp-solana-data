import { ACTIONS, SolanaAgentKit , startMcpServer  } from "solana-agent-kit";
import * as dotenv from "dotenv";

dotenv.config();

const agent = new SolanaAgentKit(
    // Note this is a unused private key, do not use a real private key
    "3py5JaxcRQAP4McHFtoarMbsSKLgT9DaxqFGNhywT4qviZ9wFbz5N9e6P6tWdLqwpD3zaABnXcXSkiRKcaCay9ec",
    process.env.RPC_URL! || "https://api.mainnet-beta.solana.com",
    {
        COINGECKO_DEMO_API_KEY: process.env.COINGECKO_DEMO_API_KEY! || "",
    }
);


// Note: commented out actions need a paid API key
// Add your required actions here
const mcp_actions = {
    GET_ASSET: ACTIONS.GET_ASSET_ACTION,
    GET_PRICE_INFERENCE: ACTIONS.GET_PRICE_INFERENCE_ACTION,
    GET_TOKEN_PRICE_DATA: ACTIONS.GET_COINGECKO_TOKEN_PRICE_DATA_ACTION,
    GET_TOKEN_INFO: ACTIONS.GET_COINGECKO_TOKEN_INFO_ACTION,
    //GET_TOP_GAINERS: ACTIONS.GET_COINGECKO_TOP_GAINERS_ACTION,
    GET_LATEST_POOLS: ACTIONS.GET_COINGECKO_LATEST_POOLS_ACTION,
    GET_TRENDING_TOKENS: ACTIONS.GET_COINGECKO_TRENDING_TOKENS_ACTION,
    GET_TRENDING_POOLS: ACTIONS.GET_COINGECKO_TRENDING_POOLS_ACTION,
}

startMcpServer(mcp_actions, agent, { name: "solana-agent", version: "0.0.1" });
