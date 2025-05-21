import { supportedTokenAddress } from "./tokens";

const BASE_URL = "https://api.rugcheck.xyz/v1";

/**
 * Fetches a detailed report for a specific token.
 * @async
 * @param {string} tokenID - The mint address or ticker of the token.
 * @returns {Promise<TokenCheck>} The detailed token report.
 * @throws {Error} If the API call fails.
 */
export async function donutFetchTokenDetailedReport(
  tokenID: string,
): Promise<DonutRugcheckReport> {
  try {
    const mint = supportedTokenAddress(tokenID);
    if (!mint) {
      throw new Error(`Token ${tokenID} not found`);
    }

    const response = await fetch(`${BASE_URL}/tokens/${mint}/report`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error(
      `Error fetching detailed report for token ${tokenID}:`,
      error.message,
    );
    throw new Error(`Failed to fetch detailed report for token ${tokenID}.`);
  }
}

export interface Holder {
  address: string;
  amount: number;
  decimals: number;
  pct: number;
  uiAmount: number;
  uiAmountString: string;
  owner: string;
  insider: boolean;
}

export interface TokenMetadata {
  name: string;
  symbol: string;
  uri: string;
  mutable: boolean;
  updateAuthority: string | null;
}

export interface Lockers {
  [key: string]: {
    programID: string;
    tokenAccount: string;
    owner: string;
    uri: string;
    unlockDate: number;
    usdcLocked: number;
    type: string;
  };
}

export interface Risk {
  name: string;
  value: string;
  description: string;
  score: number;
  level: string;
}

export interface Market {
  pubkey: string;
  marketType: string;
  mintA: string;
  mintB: string;
  mintLP: string;
  liquidityA: string;
  liquidityB: string;
  mintAAccount: MintAccount;
  mintBAccount: MintAccount;
  mintLPAccount: MintAccount;
  liquidityAAccount: MintAccount;
  liquidityBAccount: MintAccount;
  lp: LP[];
}

export interface MintAccount {
  mintAuthority: string | null;
  supply: number | null;
  decimals: number | null;
  isInitialized: boolean | null;
  freezeAuthority: string | null;
}

export interface LP {
  baseMint: string;
  quoteMint: string;
  lpMint: string;
  quotePrice: number;
  basePrice: number;
  base: number;
  quote: number;
  reserveSupply: number;
  currentSupply: number;
  quoteUSD: number;
  baseUSD: number;
  pctReserve: number;
  pctSupply: number;
  holders: Holder[];
}

export interface TransferFee {
  pct: number;
  maxAmount: number;
  authority: string;
}

export interface KnownAccount {
  [key: string]: {
    name: string;
    type: string;
  };
}

export interface InsiderNetwork {
  id: string;
  size: number;
  type: string;
  tokenAmount: number;
  activeAccounts: number;
}

export interface DonutRugcheckReport {
  mint: string | null;
  tokenProgram: string | null;
  creator: string | null;
  creatorBalance: number;
  token: {
    mintAuthority: string | null;
    supply: number;
    decimals: number;
    isInitialized: boolean;
    freezeAuthority: string | null;
  };
  token_extensions: string | null;
  tokenMeta: TokenMetadata;
  topHolders: Holder[];
  freezeAuthority: string | null;
  mintAuthority: string | null;
  risks: Risk[];
  score: number;
  score_normalised: number;
  fileMeta: string | null;
  lockerOwners: null;
  lockers: Lockers;
  markets: Market[];
  totalMarketLiquidity: number | null;
  totalLPProviders: number;
  totalHolders: number | null;
  price: number | null;
  rugged: boolean | null;
  tokenType: string;
  transferFee: TransferFee | null;
  knownAccounts: KnownAccount;
  events: [] | null;
  verification: {
    mint: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R";
    payer: "";
    name: "Raydium";
    symbol: "ray";
    description: "";
    jup_verified: true;
    jup_strict: true;
    links: [];
  };
  graphInsidersDetected: number | null;
  insiderNetworks: InsiderNetwork[];
  detectedAt: Date | null;
  creatorTokens: null;
}
