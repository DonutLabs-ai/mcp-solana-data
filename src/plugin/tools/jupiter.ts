import { QuoteResponse, SwapApi, SwapInstructionsResponse } from "@jup-ag/api";

export async function getJupiterQuote(
  jupiterClient: SwapApi,
  inputToken: string,
  outputToken: string,
  amount: number,
): Promise<QuoteResponse> {
  const quote = await jupiterClient.quoteGet({
    inputMint: inputToken,
    outputMint: outputToken,
    amount,
  });

  return quote;
}

export async function getJupiterSwap(
  quote: QuoteResponse,
  jupiterClient: SwapApi,
  userPublicAddress: string,
): Promise<SwapInstructionsResponse> {
  const swap = await jupiterClient.swapInstructionsPost({
    swapRequest: {
      quoteResponse: quote,
      userPublicKey: userPublicAddress,
    },
  });

  return swap;
}
