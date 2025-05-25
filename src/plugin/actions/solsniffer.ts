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
    "rug pull alert",
  ],
  examples: [
    [
      {
        input: {
          tokenId: "usdc",
        },
        output: {
          status: "success",
          response: {
            tokenData: {
              indicatorData: {
                high: {
                  count: 2,
                  details:
                    '{"Mintable risks found":false,"Freeze risks found":false,"A private wallet owns a significant share of the supply":true,"Tokens auto-freeze risks found":true,"Significant ownership by top 10 wallets":true,"Significant ownership by top 20 wallets":true,"Permanent control risks found":true,"Presence of token metadata":true,"High locked supply risks found":true,"Sufficient liquidity detected":true,"Very low liquidity":true}',
                },
                moderate: {
                  count: 1,
                  details:
                    '{"Token metadata are immutable":false,"Token operates without custom fees":true,"Token has recent user activity":true,"Unknown liquidity pools":true,"Low count of LP providers":true}',
                },
                low: {
                  count: 1,
                  details: '{"Contract was not recently deployed":false}',
                },
                specific: {
                  count: 0,
                  details:
                    '{"Recent interaction within the last 30 days":true}',
                },
              },
              tokenOverview: {
                deployer: "",
                mint: "2wmVCSfPxGPjrnMMn7rchp4uaeoTqN39mXFC2zhPdri9",
                address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                type: "spl-token",
              },
              tokenName: "USD Coin",
              tokenSymbol: "USDC",
              tokenImg:
                "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
              address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
              score: 71,
              deployTime: "2025-04-14T01:55:22.000Z",
              marketCap: 10011806277.6,
              externals:
                '{"website":"https://www.circle.com/en/usdc","coingecko_coin_id":"usd-coin","discord_url":"https://discord.com/invite/buildoncircle","twitter_handle":"circle"}',
              liquidityList: [
                {
                  fluxbeam: {
                    address: "9SxKNseG9pANJgJbpUfNTLPTWZajvi71ehq8QgCsDWan",
                    amount: 1.49,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "Dvr7yVzpsjxoRpAjH7f1zt8C3oYxDKuwQmePMgT6Xcik",
                    amount: 1788.84,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "EBDzibXc1KEa8FHNqkya1iUSEKt1Whe9YoKc4sHBKuhJ",
                    amount: 1285.61,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "EYRZ7TiMxfaergZb5j9UQga3dXAtGbiaeWrWDMKrNUVm",
                    amount: 756.61,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "EdEU6L2yLbXC78fdpruEFWubK7AQUGSjTNummi5zJRyY",
                    amount: 7555.83,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "En2cZdXy71xDqqYRmkA6NdZpSZvVPgsomAspL6Nz7wvB",
                    amount: 4210.33,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FFw4E781rX7TV21gw5Au6xrpmjxFsTHvkbpVBPyCGRXe",
                    amount: 937.99,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FK3xj3tMeX7ziVNG7mEDi6Ej6UrQAJ68MaBvbL7qVkUA",
                    amount: 588.74,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FbkX1h2YTs171cEMa4GrV7XbAiQt5zSmV2CjfYWxXJDP",
                    amount: 25453.36,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FoSDw2L5DmTuQTFe55gWPDXf88euaxAEKFre74CnvQbX",
                    amount: 52391.55,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "G2YJfYeBT3YXiwfMF8oyFhqYjGVDj4WLr3NKcCzpyELS",
                    amount: 0.04,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "GGPddKCWYxU9tgatkq3gZqcVBaitdTEi3EWURAXAEoaA",
                    amount: 1045.15,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "GJA5EuRNESccQ86yTzBNKNz2JxMZhW6Z6xbmQyk7mLjQ",
                    amount: 2844.75,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    amount: 3343072.3,
                    lpPair: "SOL",
                  },
                },
              ],
              ownersList: [
                {
                  address: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
                  amount: "1517138645.86",
                  percentage: "15.15",
                },
                {
                  address: "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9",
                  amount: "517481383.25",
                  percentage: "5.17",
                },
                {
                  address: "3gd3dqgtJ4jWfBfLYTX67DALFetjc5iS72sCgRhCkW2u",
                  amount: "500000000.00",
                  percentage: "4.99",
                },
                {
                  address: "AVzP2GeRmqGphJsMxWoqjpUifPpCret7LqWhD8NWQK49",
                  amount: "370818950.66",
                  percentage: "3.70",
                },
                {
                  address: "7VHUFJHWu2CuExkJcJrzhQPJ2oygupTWkL2A2For4BmE",
                  amount: "309853067.66",
                  percentage: "3.09",
                },
              ],
              decimals: 6,
              auditRisk: {
                mintDisabled: false,
                freezeDisabled: true,
                lpBurned: true,
                top10Holders: true,
              },
            },
            tokenInfo: {
              price: 1,
              supplyAmount: 8755664366.161577,
              mktCap: 8755664366.161577,
            },
          },
        },
        explanation: "Check if usdc is a rug pull from solsniffer",
      },
    ],
  ],
  schema: z.object({
    tokenId: z.string().describe("The token ticker, name or mint address"),
  }),
  handler: async (agent, input) => {
    try {
      const res = await fetchSolsnifferReport(
        input.tokenId,
        agent.config.OTHER_API_KEYS?.SOLSNIFFER_API_KEY || "",
      );
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
