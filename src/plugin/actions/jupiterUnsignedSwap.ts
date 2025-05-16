import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import {
  getJupiterQuote,
  getJupiterSwapUnsigned,
  supportedTokenAddress,
} from "../tools";
import { createJupiterApiClient } from "@jup-ag/api";

const unsignedSwapAction: Action = {
  name: "GET_JUPITER_UNSIGNED_SWAP",
  similes: [
    "swap 1 sol for usdc",
    "get unsigned swap transaction for 1 sol to goat",
    "suggest a swap transaction for 1 sol into goat",
  ],
  description: `This tool can be used to get unsigned swap transactions for user to sign and send to the network (It uses Jupiter Exchange).`,
  examples: [
    [
      {
        input: {
          outputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          inputAmount: 1_000_000,
          inputMint: "So11111111111111111111111111111111111111112",
          publicKey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
        },
        output: {
          status: "success",
          message:
            "The swap transaction can be signed and sent to the network. You will get 1_000_000 EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v for 1_000_000 So11111111111111111111111111111111111111112",
          swapTransaction:
            "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAHCk2QvGBGzwA/TJ04YfMHJY+82NAiKCv7DEd84568ptMVwud9DWJcKjBegEsKyZKTUwgF2LCfKgaZt8FJCneYB6jgBp1BVU1vOgthrz8jyh72VcwsvUPS+uDYxtk9zt44+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwZGb+UhFzL/7K26csOb57yM5bvF9xJrLEObOkAAAAAEedVb8jHAbu50xW7OaBUH/bGy3qP0jlECsc2iVrwTjwbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCpjJclj04kifG7PRApFI4NgwtaE5na/xCEBI572Nvp+FmyIKaZBLbu2IoL6YkUKYD80agehUczMoMmMcu2LhFij7Q/+if11/ZKdMCbHylYed5LCas238ndUUsyGqezjOXoW2MKPe+Vo80zZAhu8FM8/8yePxmQ/EbfuV6hC3pDtnkHBAAFAsBcFQAHBgACAA0DBgEBAwIAAgwCAAAAAMqaOwAAAAAGAQIBEQcGAAEACAMGAQEFGwYAAgEFCAUJBQ8GCg4KDAsKCgoKCgoKCgIBACPlF8uXeuOtKgEAAAAHZAABAMqaOwAAAABQfJ0yAAAAADIAAAYDAgAAAQkBnLTl3eQPTrIuqAEBKhmLFoT9qkLe2TiKlfxiAY5uvJ0DfHd4AwcoAw==",
          inputToken: "So11111111111111111111111111111111111111112",
          outputToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          inputAmount: 1_000_000,
          outputAmount: 1_000_000,
        },
        explanation: "Get unsigned transaction of a swap of 1 SOL for USDC",
      },
    ],
  ],
  schema: z.object({
    outputMint: z.string().min(32, "Invalid output mint address"),
    inputAmount: z.number().positive("Input amount must be positive"),
    inputMint: z.string().min(32, "Invalid input mint address"),
    publicKey: z.string().min(32, "Invalid public key"),
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

      const swap = await getJupiterSwapUnsigned(
        quote,
        jupiterClient,
        input.publicKey,
      );

      return {
        status: "success",
        swapTransaction: swap.swapTransaction,
        outputToken: supportedTokenOutput,
        inputToken: supportedTokenInput,
        inputAmount: input.inputAmount,
        outputAmount: quote.outAmount,
        message: `The swap transaction can be signed and sent to the network. You will get ${quote.outAmount} of ${input.outputMint} for ${input.inputAmount} of ${input.inputMint} if signed`,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to get unsigned swap transaction: ${error.message}`,
      };
    }
  },
};

export { unsignedSwapAction };
