import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getTokenInfo } from "../tools";

const getTokenInfoAction: Action = {
  name: "GET_TOKEN_INFO",
  similes: [
    "get token market data",
    "get price of token",
    "get market cap of token",
    "get sol fully diluted vallue",
    "get usdc market information",
    "what is 24h price change of ray",
    "what is the 24h price information of sol",
  ],
  description: `This tool can be used to get the market data for a single token. Use this for single token queries and use batch call for multiple tokens.`,
  examples: [
    [
      {
        input: {
          token: "ray",
        },
        output: {
          status: "success",
          supportedTokens: [
            {
              id: "raydium",
              symbol: "ray",
              name: "Raydium",
              image:
                "https://coin-images.coingecko.com/coins/images/13928/large/PSigc4ie_400x400.jpg?1696513668",
              current_price: 3.17,
              market_cap: 918372256,
              market_cap_rank: 100,
              fully_diluted_valuation: 1758871555,
              total_volume: 77053235,
              high_24h: 3.54,
              low_24h: 3.17,
              price_change_24h: -0.29929103562419,
              price_change_percentage_24h: -8.62771,
              market_cap_change_24h: -86842052.57814014,
              market_cap_change_percentage_24h: -8.63916,
              circulating_supply: 289786142.067795,
              total_supply: 555000000,
              max_supply: 555000000,
              ath: 16.83,
              ath_change_percentage: -81.17142,
              ath_date: "2021-09-12T20:20:23.998Z",
              atl: 0.134391,
              atl_change_percentage: 2258.33103,
              atl_date: "2022-12-29T22:15:53.927Z",
              roi: null,
              last_updated: "2025-05-17T01:44:23.136Z",
            },
          ],
          message:
            "Here is the list of the requested tokens with their realtime market data",
        },
        explanation: "Receive market information for ray and solana",
      },
    ],
  ],
  schema: z.object({
    token: z.string(),
  }),
  handler: async (agent: SolanaAgentKit, input: Record<string, any>) => {
    try {
      const tokenData = await getTokenInfo(
        input.token,
        agent.config.COINGECKO_DEMO_API_KEY,
      );
      if (!tokenData) {
        return {
          status: "error",
          message: "coingecko api request failed",
        };
      }

      return {
        status: "success",
        supportedTokens: tokenData,
        message: `Here is the full information of the requested token`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed get individual token info: ${error.message}`,
      };
    }
  },
};

export { getTokenInfoAction };
