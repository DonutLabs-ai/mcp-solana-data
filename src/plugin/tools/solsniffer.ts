import { supportedTokenAddress } from "./tokens";

const BASE_URL = "https://solsniffer.com/api/v2/token";

/**
 * Fetches a detailed report for a specific token.
 * @async
 * @param {string} tokenID - The mint address or ticker of the token.
 * @returns {Promise<TokenCheck>} The detailed token report.
 * @throws {Error} If the API call fails.
 */
export async function fetchSolsnifferReport(
  tokenID: string,
  apiKey?: string,
): Promise<any> {
  try {
    const mint = supportedTokenAddress(tokenID);
    if (!mint) {
      throw new Error(`Token ${tokenID} not found`);
    }

    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey ?? "",
        "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
      },
    };

    const response = await fetch(`${BASE_URL}/${mint}`, options);

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