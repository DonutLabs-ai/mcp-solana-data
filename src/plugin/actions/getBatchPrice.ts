import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getTokenMarketInfo } from "../tools";

const getTokenDataBatchAction: Action = {
  name: "GET_TOKEN_MARKET_INFO_BATCH",
  similes: [
    "get token market data",
    "get price of tokens",
    "get market cap of tokens",
    "get sol fully diluted vallue",
    "get usdc and sol market information",
    "what is the price of moodeng, bonk and solana",
  ],
  description: `This tool can be used to get the market data of tokens requested. The input is an array of token identifiers which can be a token name, ticker or address.`,
  examples: [
    [
      {
        input: {
          tokens: ["ray", "sol"],
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
            {
              id: "wrapped-solana",
              symbol: "sol",
              name: "Wrapped SOL",
              image:
                "https://coin-images.coingecko.com/coins/images/21629/large/solana.jpg?1696520989",
              current_price: 165.42,
              market_cap: 0,
              market_cap_rank: null,
              fully_diluted_valuation: 99454506172,
              total_volume: 1400043586,
              high_24h: 173.91,
              low_24h: 165.42,
              price_change_24h: -5.9447748436035965,
              price_change_percentage_24h: -3.46918,
              market_cap_change_24h: 0,
              market_cap_change_percentage_24h: 0,
              circulating_supply: 0,
              total_supply: 600797473.0367756,
              max_supply: null,
              ath: 290.3,
              ath_change_percentage: -43.01894,
              ath_date: "2025-01-19T11:20:39.814Z",
              atl: 8.11,
              atl_change_percentage: 1939.52128,
              atl_date: "2022-12-29T20:45:41.226Z",
              roi: null,
              last_updated: "2025-05-17T01:43:15.392Z",
            },
          ],
          message:
            "Here is the list of the requested tokens with their realtime market data",
        },
        explanation: "Receive market information for ray and solana",
      },
    ],
    [
      {
        input: {
          tokens: ["moodeng", "bonk"],
        },
        output: {
          status: "success",
          supportedTokens: [
            {
              id: "bonk",
              symbol: "bonk",
              name: "Bonk",
              image:
                "https://coin-images.coingecko.com/coins/images/28600/large/bonk.jpg?1696527587",
              current_price: 0.00002058,
              market_cap: 1594517622,
              market_cap_rank: 73,
              fully_diluted_valuation: 1829238279,
              total_volume: 350460542,
              high_24h: 0.00002082,
              low_24h: 0.00001824,
              price_change_24h: 0.00000207,
              price_change_percentage_24h: 11.16773,
              market_cap_change_24h: 163685369,
              market_cap_change_percentage_24h: 11.43987,
              circulating_supply: 77419592329436.58,
              total_supply: 88816128363584.2,
              max_supply: 88816128363584.2,
              ath: 0.00005825,
              ath_change_percentage: -64.63457,
              ath_date: "2024-11-20T04:01:06.465Z",
              atl: 8.6142e-8,
              atl_change_percentage: 23814.36405,
              atl_date: "2022-12-29T22:48:46.755Z",
              roi: null,
              last_updated: "2025-05-18T17:17:16.775Z",
            },
            {
              id: "moo-deng",
              symbol: "moodeng",
              name: "Moo Deng",
              image:
                "https://coin-images.coingecko.com/coins/images/50264/large/MOODENG.jpg?1726726975",
              current_price: 0.261922,
              market_cap: 259780459,
              market_cap_rank: 267,
              fully_diluted_valuation: 259780459,
              total_volume: 818253747,
              high_24h: 0.278804,
              low_24h: 0.177419,
              price_change_24h: 0.08208,
              price_change_percentage_24h: 45.64001,
              market_cap_change_24h: 83371587,
              market_cap_change_percentage_24h: 47.26043,
              circulating_supply: 989971791.17,
              total_supply: 989971791.17,
              max_supply: 989971791.17,
              ath: 0.680378,
              ath_change_percentage: -61.44814,
              ath_date: "2024-11-15T14:06:28.269Z",
              atl: 0.01544782,
              atl_change_percentage: 1597.96468,
              atl_date: "2024-09-20T13:55:20.098Z",
              roi: null,
              last_updated: "2025-05-18T17:17:16.711Z",
            },
          ],
          message:
            "This returns a list of the requested tokens with their realtime market data",
        },
        explanation: "This returns market information for moodeng and bonk",
      },
    ],
  ],
  schema: z.object({
    tokens: z.array(z.string()),
  }),
  handler: async (agent: SolanaAgentKit, input: Record<string, any>) => {
    try {
      const tokenData = await getTokenMarketInfo(
        input.tokens,
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
        message: `Here is the list of the requested tokens with their realtime market data`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to get list of token market info: ${error.message}`,
      };
    }
  },
};

export { getTokenDataBatchAction };
