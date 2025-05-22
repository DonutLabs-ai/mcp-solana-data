import { Action } from "solana-agent-kit";
import { z } from "zod";
import { fetchSolsnifferReport } from "../tools";

const solSnifferAction: Action = {
  name: "SOLSNIFFER_RUGCHECK",
  description:
    "Get token in depth token analysis to determine if token is a rug pull from solsniffer",
  similes: [
    "check rug pull from solsniffer",
    "rug pull check from solsniffer",
    "rug pull detector",
    "rug pull scanner",
    "rug pull alert",
  ],
  examples: [
    [
    ],
  ],
  schema: z.object({
    tokenId: z.string().describe("The token ticker, name or mint address"),
  }),
  handler: async (agent, input) => {
    try {
      // @ts-ignore
      const res = await fetchSolsnifferReport(input.tokenId, agent.config.SOLSNIFFER_API_KEY);
      return {
        status: "success",
        response: res,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: error.message,
      };
    }
  },
};

export { solSnifferAction };

