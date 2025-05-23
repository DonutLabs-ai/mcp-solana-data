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
                  fluxbeam: {
                    address: "CZEZDGDkzsn4zTfdw6XRm4U1o6GatotMhhRmVEzdwGS3",
                    amount: 12440.52,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "R5trYLjPStfMRLbS9enkxBcWUCC9NSCEob3RXGWeBdH",
                    amount: 0.01,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "2ocSQaqixEaFTC3qt63c5RUiH1eMvkWwY8ute93prvqR",
                    amount: 140.73,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "314P1kBWgm7t2vdg8j9HMKPv83q99DNhu4NeXMA6KwsG",
                    amount: 940.7,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "3SFQjmDsi5NsjJeZfz7fgJ6VddX3TcuZkv2eUibWJN8N",
                    amount: 305.31,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "6UrLw8KWURomjwnhszvA59mqjzLmbcejNTDFAfQJjq4u",
                    amount: 1935.18,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "6WTbcDmtqDNwxxLe9YzHzpSSBKQ7AduZG7SmYWpRwjZZ",
                    amount: 47018.67,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "6iYbJ5rfyNGjMPhk1CDjjZeTJvuRNw5iCTnVESLPtaKz",
                    amount: 0.59,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "7pw8khNqJrs6zf98wQJ4npHpwGaiJxa6p8D9qHiF2S21",
                    amount: 151.93,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "7tSbDdxxUPMiJmVQ7o1ufynyodQ6SQetEoxYWPEjuAec",
                    amount: 11.91,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "7zwc5JuKuyhgc1VELA59KGAY2xmd3HZGwJNLCfHXZP99",
                    amount: 1652.67,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "878fWxBvXfehM1U8uJuJGrBnxrCYkmcEzNhwLV8AgBfa",
                    amount: 520134.28,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "AcQPrTHx3ggWau1yU1fe5mQ89HeqPTsEoWC7ejL67wfd",
                    amount: 8.6,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "Bnf3YVxKdM4bfhcT6DBk85nSJ2tNYiX8zCUP9sKyD4Zr",
                    amount: 0.6,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "F4eV7X2tk6SEkbg86T36mMbqCzdECKLKiXe3MNBvn7Zy",
                    amount: 74.52,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "F5Lb1Hamu7SBA3fPDwmajtACqaYNLrk4AQ8h8aL5936g",
                    amount: 0.01,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FhTotf8DZt5vuepDEMQic9sQpCvgByQrnZwTff25G8gR",
                    amount: 48.13,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "FjdEhWwkdTcSmBzacYuqXqv2aSYtbWA256j6Zj9KtmWJ",
                    amount: 10.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "GMgh4NtWrGaUf1RR2kcXD7LY1jou1qFAuSsQeKp5ow4a",
                    amount: 666.91,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "GY9inD1bJ1P96N9fWZWV2v8UWgKK7ad38kSPyNwR2ZLt",
                    amount: 22.02,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "HRYEjwdo3bZ1TpXKWKcezqiwSV2Ywuh4LxMa2PzoCnG6",
                    amount: 0.25,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "HdKhU9wYxEJdKphUy4DPXri6RwwMoevxM3dNsXKi8gUp",
                    amount: 89.22,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "1jw5fDodwGEGBVqNXsx2eqiLgNmgMDEeXWSbrTreLCM",
                    amount: 3893.4,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "5rCf1DM8LjKTw4YqhnoLcngyZYeNnQqztScTogYHAS6",
                    amount: 1218512.1,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "BGm1tav58oGcsQJehL9WXBFXF7D27vZsKefj4xJKD5Y",
                    amount: 635410.18,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "sZxb9vrxJBpFiJBogovhfkYqfapVzveLEU4TmzWv4GN",
                    amount: 101515.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "2L47gbUzGsnJZqRzfny4b3VWvKBnMRTMeNH3uzFrj6ko",
                    amount: 3313.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "2kSaQT7BcB92uVeDtmxsDJm9fbGxupf64KgtsF5xzLhf",
                    amount: 3288.31,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "2sf5NYcY4zUPXUSmG6f66mskb24t5F8S11pC1Nz5nQT3",
                    amount: 21028.62,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "35zLRKDhRYqQaajzcBYp5A9Z3uA7TuEmxpYzyokPoxbf",
                    amount: 157.19,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "3DupsT51RJp3z3yoAcwsXoBgFZitFo7fdRfgW6ZqDN3Z",
                    amount: 83.72,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "3WHNf55iBawfL7U1cC4Htj11KKmC8hvrrbdM31yPUr4C",
                    amount: 217.7,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "3msVd34R5KxonDzyNSV5nT19UtUeJ2RF1NaQhvVPNLxL",
                    amount: 800.11,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "3rFJ8vfzP2L7v154MtBxmGxjxwXVtarYMCzCU4htbRya",
                    amount: 0.17,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "447QvCejPNLHHZ8ZunR7jg8jKBy1KHzGqR82F5x1Mvd9",
                    amount: 16.21,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "4Q9JruogigCGhDdGyW9ijqpFejq1AjGbB7kRiBaTaicu",
                    amount: 292.95,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "4YVLUZGEhsjfsWuxRbo6h18vL297HYRHTrLVE8bwpyCW",
                    amount: 4078.84,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "5BKxfWMbmYBAEWvyPZS9esPducUba9GqyMjtLCfbaqyF",
                    amount: 21551.97,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "5BoHD7DAHsGCA9D8eUkkZTgWTrnpad6G18MnTq3cUS86",
                    amount: 14121.88,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "5DLLzhC3o53safWkHjkYDVkabBZ1tzfpyXVj1gBrTtr6",
                    amount: 17383.98,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "5XRqv7LCoC5FhWKk5JN8n4kCrJs3e4KH1XsYzKeMd5Nt",
                    amount: 189394.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "627kqiAtYNE4FFKtUcnR9nmDqqCZnQue2ALYRQtnziLR",
                    amount: 22597.31,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "6DKY7ePVx5KdRg7Wan8zQ9mJxHQSJso39KVSpmXF2UPb",
                    amount: 72.15,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "6YuRXMMF4W8zo216CP1A7iiE627GdDaitCRS2iXEdM2q",
                    amount: 127050.73,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "81MPQqJY58rgT83sy99MkRHs2g3dyy6uWKHD24twV62F",
                    amount: 173.54,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "8M5rjeDQKW4w4rmWFQLTqCYVuA1rMe9Z2QQ2SZResD9M",
                    amount: 4220.24,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "8M6hydDhfZJyaVcsstFUoGD4qae9VUdPrDCr1WXJM9hj",
                    amount: 31034.82,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "8gJ7UWboMeQ6z6AQwFP3cAZwSYG8udVS2UesyCbH79r7",
                    amount: 13703.39,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "8zzQv7m3M1JaMUCaQGwCTgyzW9BG9RhQ4X9G1hkFekxb",
                    amount: 861.12,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "91Q7G5n6Ux2qYo8vMMiuPGY5bJrjbuMucc8kmncAuqqn",
                    amount: 848.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "9Q1njS4j8svdjCnGd2xJn7RAkqrJ2vqjaPs3sXRZ6UR7",
                    amount: 8461.85,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "9fjLVCpbHRHtGNyVGiuiq2jitSCc3vzyScAdYRtsRUe6",
                    amount: 3609.83,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "9oCwYQJYCWHeXnodFCxdqY1kV4uBPo5P7yWGkNJ2Wjj3",
                    amount: 350090.89,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "AdewTcFb9UKiy7sc7ypW2fRC5TDjkuMHfsjtGcipAset",
                    amount: 1280.47,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "BVRbyLjjfSBcoyiYFuxbgKYnWuiFaF9CSXEa5vdSZ9Hh",
                    amount: 1444741.34,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "CR2kQQcALb9FpA5y5KA7oa3Kf1kZ63Tz6uSQyG2yzPc6",
                    amount: 64708.4,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "CgqwPLSFfht89pF5RSKGUUMFj5zRxoUt4861w2SkXaqY",
                    amount: 778193.46,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "Cu8Zg65pw6anL3khVnwvjR9drchnszTdkwE3gtw1uHhU",
                    amount: 2055.09,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "DGSu6KJrHrXMXyXCzGMqanu8g7EuSyniDw3mPR3B9BGg",
                    amount: 167516.19,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "DJFoQN5yNVtoEhoXiKqmYFXowQcPJSvB3BAavEcdEi7s",
                    amount: 90.98,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "DJJzSUx5gEqDJhTyE8tvZtkkHG7R7v6EoyZXN32aAsXF",
                    amount: 1079.28,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "DNkZFw1VF36K15yoDvgY2QmrDiwrLP5y1DcMEHEPPa1Q",
                    amount: 418.26,
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
                  meteoraDlmm: {
                    address: "GPH8MxUgBrc2SGfJzbydRZE4nf4xv5jzj7wpL4V6QDqv",
                    amount: 41.02,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "GuiTneqjgsXsKCKxPHiyTuKw4BsdGaqouq4ZFBxr7Buo",
                    amount: 0.04,
                    lpPair: "SOL",
                  },
                },
                {
                  meteoraDlmm: {
                    address: "HTvjzsfX3yU6BUodCjZ5vZkUrAxMDTrBs3CJaq43ashR",
                    amount: 14144.69,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "AbbG2aR8iNhy2prC32iDRW7pKJjzqhUtri8rV5HboHUY",
                    amount: 0.95,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "FFhoDyFx1TvZhJHMUbU6BSi7dkrxEJucRFVYRnsb9xBy",
                    amount: 1.27,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "S2MiN5qmiRS8HBQMXcdJUhLwrBgX9P3naDuo4GkQ63t",
                    amount: 3.7,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "3gSjs6MqyHFsp8DXvaKvVUJjV7qg5itf9qmUGuhnSaWH",
                    amount: 0.79,
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
                {
                  raydium: {
                    address: "5fGDRDhRhkbiTdgww4v4wRq6HZTYeV6qyVi1PJVV9qpu",
                    amount: 2.16,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "5oAvct85WyF7Sj73VYHbyFJkdRJ28D8m4z4Sxjvzuc6n",
                    amount: 436.19,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "61acRgpURKTU8LKPJKs6WQa18KzD9ogavXzjxfD84KLu",
                    amount: 792.12,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "7s2pco2iYjNPKeN7QYaHD8ZSRb8jZgypspwg7DNkZhZJ",
                    amount: 34.49,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "8vVQ4G39TeBqiJguKPxYto6a997KQSaSwrscqxR6QtGT",
                    amount: 0.1,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "9JZdkfK4gUtq6QzP3Pq82PjDYPW9eRtqHNtjZn23Nc51",
                    amount: 0.52,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "CwF4aUPjMciM3u9DpxoZyLGVKVxgUgBmxHW32RbtmZNz",
                    amount: 55.31,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "EUvnsWhMnhY3S5EnV3tLATNRvTM2xBMWZQQguzpFNwYT",
                    amount: 0.75,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "FyqYBBJ8vhr5AtDZiyJue4Khx9Be6Xijx5nm6aL6wZZV",
                    amount: 87.12,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "GUZWuwD2qhuGZ13PVtTH9yJrB1kGEExN8YBVDiaS7DmL",
                    amount: 0.54,
                    lpPair: "SOL",
                  },
                },
                {
                  raydium: {
                    address: "H2p2de3UXq42To4XA5ByCY8C2NgJzXX6nzNvxbrMESBW",
                    amount: 0.12,
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
                {
                  address: "9d9mb8kooFfaD3SctgZtkxQypkshx6ezhbKio89ixyy2",
                  amount: "204977086.44",
                  percentage: "2.05",
                },
                {
                  address: "DBD8hAwLDRQkTsu6EqviaYNGKPnsAMmQonxf7AH8ZcFY",
                  amount: "126180280.45",
                  percentage: "1.26",
                },
                {
                  address: "FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5",
                  amount: "125464520.72",
                  percentage: "1.25",
                },
                {
                  address: "JCNCMFXo5M5qwUPg2Utu1u6YWp3MbygxqBsBeXXJfrw",
                  amount: "101781903.79",
                  percentage: "1.02",
                },
                {
                  address: "AC5RDfQFmDS1deWZos921JfqscXdByf8BKHs5ACWjtW2",
                  amount: "89257843.80",
                  percentage: "0.89",
                },
                {
                  address: "7MNeJP9gi5kBY1DVzJA1kzdeCr6oscXEZW51XMnmByC7",
                  amount: "83872087.35",
                  percentage: "0.84",
                },
                {
                  address: "3csuXZKah5rgpb8RiwX9XfjrMxcp3u1K9mBdCwL51spj",
                  amount: "76303803.38",
                  percentage: "0.76",
                },
                {
                  address: "AHzubRgSELvCEJA7GXBdTG8G29tSdWSe5uNPnihExD7W",
                  amount: "74000000.00",
                  percentage: "0.74",
                },
                {
                  address: "B9spsrMK6pJicYtukaZzDyzsUQLgc3jbx5gHVwdDxb6y",
                  amount: "63882348.79",
                  percentage: "0.64",
                },
                {
                  address: "F6ZjiBm1WgVXzez5vxHeBDgaVPQRfLyFb7GFwXvyZVxD",
                  amount: "52931882.24",
                  percentage: "0.53",
                },
                {
                  address: "9DrvZvyWh1HuAoZxvYWMvkf2XCzryCpGgHqrMjyDWpmo",
                  amount: "50454043.16",
                  percentage: "0.50",
                },
                {
                  address: "4kWwg9hQri1aFVqjxayDVmjmYtjXjrf1h5TpfvvAk5Sm",
                  amount: "46920511.85",
                  percentage: "0.47",
                },
                {
                  address: "AS5MV3ear4NZPMWXbCsEz3AdbCaXEnq4ChdaWsvLgkcM",
                  amount: "45818171.95",
                  percentage: "0.46",
                },
                {
                  address: "61yKS9bjxWdqNgAHt439DfoNfwK3uKPAJGWAsFkC5M4C",
                  amount: "44593888.56",
                  percentage: "0.45",
                },
                {
                  address: "DWo8SNtdBDuebAEeVDf7cWBQ6DUvoDbS7K4QTrQvYS1S",
                  amount: "32269307.85",
                  percentage: "0.32",
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
      // @ts-ignore
      const res = await fetchSolsnifferReport(
        input.tokenId,
        agent.config.SOLSNIFFER_API_KEY,
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
