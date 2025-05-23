import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { getJupiterQuote, supportedTokenAddress } from "../tools";
import { createJupiterApiClient } from "@jup-ag/api";

const quoteAction: Action = {
  name: "GET_JUPITER_QUOTE",
  similes: [
    "quote token swap",
    "estimate token swap",
    "estimate amount of token received for this amount of another token",
    "quote swap of 1 sol to usdc",
    "how much usdc will I get for 1 ray",
  ],
  description: `This tool can be used to get real time quotes for token swaps (It uses Jupiter Exchange).`,
  examples: [
    [
      {
        input: {
          outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          inputAmount: 1_000_000,
          inputMint: "So11111111111111111111111111111111111111112",
        },
        output: {
          status: "success",
          message:
            "you will get 1_000_000 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v for 1_000_000 So11111111111111111111111111111111111111112",
          inputToken: "So11111111111111111111111111111111111111112",
          outputToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          inputAmount: 1_000_000,
          outputAmount: 1_000_000,
        },
        explanation: "Get quote for 1 SOL for USDC",
      },
    ],
  ],
  schema: z.object({
    outputMint: z.string().max(256, "Invalid output mint address"),
    inputAmount: z.number().positive("Input amount must be positive"),
    inputMint: z.string().max(256, "Invalid input mint address"),
  }),
  handler: async (_agent: SolanaAgentKit, input: Record<string, any>) => {
    try {
      const jupiterClient = createJupiterApiClient();

      const supportedTokenOutput = supportedTokenAddress(input.outputMint);
      const supportedTokenInput = supportedTokenAddress(input.inputMint);
      if (!supportedTokenOutput) {
        return {
          status: "error",
          message: "Invalid output mint address",
        };
      } else if (!supportedTokenInput) {
        return {
          status: "error",
          message: "Invalid input mint address",
        };
      }

      const quote = await getJupiterQuote(
        jupiterClient,
        supportedTokenInput,
        supportedTokenOutput,
        input.inputAmount,
      );

      return {
        status: "success",
        outputToken: supportedTokenOutput,
        inputToken: supportedTokenInput,
        inputAmount: input.inputAmount,
        outputAmount: quote.outAmount,
        message: `You will get ${quote.outAmount} of ${input.outputMint} for ${input.inputAmount} of ${input.inputMint}`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to get quote: ${error.message}`,
      };
    }
  },
};

export { quoteAction };
