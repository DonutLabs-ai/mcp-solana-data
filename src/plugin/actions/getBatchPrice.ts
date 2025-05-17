import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getTokenMarketInfo } from "../tools";

const getTokenDataBatchAction: Action = {
  name: "GET_TOKEN_MARKET_INFO_BATCH",
  similes: [
    "get supported tokens",
    "get list of supported tokens",
    "token list",
  ],
  description: `This tool can be used to get the market data of tokens input. The input is an array of token identifiers whcih can be a token name, ticker or address.`,
  examples: [
    [
      {
        input: {
          tokens: ["sol", "ray"],
        },
        output: {
          status: "success",
          supportedTokens: [
            {
              id: "wrapped-solana",
              ticker: "sol",
              solana_address: "So11111111111111111111111111111111111111112",
            },
            {
              id: "raydium",
              ticker: "ray",
              solana_address: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
            },
          ],
          message:
            "Here is the list of supported tokens with their ticker, name, and solana adress",
        },
        explanation: "Recieve the list of supported tokens",
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
        message: `Here is the list of the requested tokens with their market data`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to token list: ${error.message}`,
      };
    }
  },
};

export { getTokenDataBatchAction };
