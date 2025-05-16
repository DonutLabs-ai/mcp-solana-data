import { CoingeckoSupportedTokens, CoingeckoTokenId } from "donut-sdk";
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

// returns address from input (`name, ticker or address), note if input is address it will return the same address if supported
export function supportedTokenAddress(id: string): string | undefined {
  const tokenList = getToken(id);
  return tokenList?.solana_address;
}
