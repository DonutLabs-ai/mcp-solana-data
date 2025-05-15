import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getTokenList } from "../tools";
import { CoingeckoTokenId } from "donut-sdk";

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
              id: "2080",
              ticker: "2080",
              solana_address: "Dwri1iuy5pDFf2u2GwwsH2MxjR6dATyDv9En9Jk8Fkof",
            },
            {
              id: "000-capital",
              ticker: "000",
              solana_address: "CVU6QRwpHz94UGyPFFehm1G1sFYRH7xDk9UhZ9RApump",
            },
          ],
          message:
            "Here is the list of supported tokens with their ticker, name, and solana adress",
        },
        explanation: "Recieve the list of supported tokens",
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
