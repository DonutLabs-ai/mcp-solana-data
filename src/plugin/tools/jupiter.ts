import { QuoteResponse, SwapApi, SwapResponse } from "@jup-ag/api";

// Gets quote for token swap
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

// Gets unsigned swap transaction from quote
export async function getJupiterSwapUnsigned(
  quote: QuoteResponse,
  jupiterClient: SwapApi,
  userPublicAddress: string,
): Promise<SwapResponse> {
  const swap = await jupiterClient.swapPost({
    swapRequest: {
        quoteResponse: quote,
        userPublicKey: userPublicAddress,
    },
  });

  return swap;
}
