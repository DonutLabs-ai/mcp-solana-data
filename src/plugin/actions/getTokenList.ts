import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getTokenList } from "../tools";

const getTokenListAction: Action = {
  name: "GET_TOKEN_LIST",
  similes: [
    "get supported tokens",
    "get list of supported tokens",
    "token list",
  ],
  description: `This tool can be used to get the list of supported tokens available.`,
  examples: [
    [
      {
        input: {},
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
        explanation:
          "Receive the list of supported tokens, in this case only radium and wrapped solana",
      },
    ],
  ],
  schema: z.object({}),
  handler: async (_agent: SolanaAgentKit, input: Record<string, any>) => {
    try {
      const tokenList = getTokenList();
      const tokenListInfo = Object.values(tokenList.nameToToken);

      return {
        status: "success",
        supportedTokens: tokenListInfo,
        message: `Here is the list of supported tokens with their ticker, name, and solana adress`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to token list: ${error.message}`,
      };
    }
  },
};

export { getTokenListAction };
