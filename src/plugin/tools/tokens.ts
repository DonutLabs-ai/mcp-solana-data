import {
  CoingeckoSupportedTokens,
  CoingeckoTokenInfo,
  CoingeckoTokenId,
  CoinMarket,
  CoingeckoPriceApi,
} from "donut-sdk";
import tokenList from "../../assets/tokenList.json";

export function getTokenList(): CoingeckoSupportedTokens {
  return tokenList as CoingeckoSupportedTokens;
}

// Get token info from identifier (eg: name, ticker, address)
export function getToken(identifier: string): CoingeckoTokenId | undefined {
  const tokenList = getTokenList();
  if (identifier.length < 32) {
    const lowercasedIdentifier = identifier.toLowerCase();
    const tokenFromName: CoingeckoTokenId | undefined =
      tokenList.nameToToken[lowercasedIdentifier];
    if (tokenFromName) {
      return tokenFromName;
    }
    const tokenFromTicker: CoingeckoTokenId | undefined =
      tokenList.tickerToToken[lowercasedIdentifier];
    if (tokenFromTicker) {
      return tokenFromTicker;
    }
  }
  const tokenFromAddress: CoingeckoTokenId | undefined =
    tokenList.addressToToken[identifier];
  if (tokenFromAddress) {
    return tokenFromAddress;
  }
}

export async function getTokenInfo(
  id: string,
  apiKey?: string,
): Promise<CoingeckoTokenInfo | undefined> {
  const tokenApi = new CoingeckoPriceApi(undefined, apiKey);
  const token = getToken(id);
  if (!token) {
    return undefined;
  }

  const tokenInfo = await tokenApi.getTokenInfo(token.id);
  return tokenInfo;
}

// returns address from input (`name, ticker or address), note if input is address it will return the same address if supported
export function supportedTokenAddress(id: string): string | undefined {
  const tokenList = getToken(id);
  return tokenList?.solana_address;
}

export async function getTokenMarketInfo(
  identifiers: string[],
  apiKey?: string,
): Promise<CoinMarket[] | undefined> {
  const onlyIds = identifiers.reduce<string[]>((acc, id: string) => {
    const token = getToken(id);
    if (token) {
      acc.push(token.id);
    }
    return acc;
  }, []);

  if (onlyIds.length === 0) {
    return undefined;
  }

  const coingeckoPriceApi = new CoingeckoPriceApi(undefined, apiKey);
  const marketInfo = await coingeckoPriceApi.getBatchMarketInfo(onlyIds);
  return marketInfo;
}
