import { PublicKey } from "@solana/web3.js";
import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { transferUnsigned, supportedTokenAddress } from "../tools";

const transferUnsignedAction: Action = {
  name: "TRANSFER_UNSIGNED",
  similes: [
    "create transaction to transfer tokens",
    "transfer funds with unsigned transaction",
    "build transaction to send money",
    "suggest to send sol to address",
  ],
  description: `Generate a transaction to transfer tokens or SOL to another address (also called a wallet address). You can define the mint as an address, token name or token ticker.`,
  examples: [
    [
      {
        input: {},
        output: {
          status: "success",
          message: "Transaction generated successfully",
          amount: 0.2,
          sender: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
          recipient: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
          token: "SOL",
          transaction: {
            tx: {
              recentBlockhash: "3zF75wT133axLMuzBFgRah3Q9XvwtLntajMP9vk9Lwn3",
              feePayer: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
              nonceInfo: null,
              instructions: [
                {
                  keys: [
                    {
                      pubkey: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
                      isSigner: true,
                      isWritable: true,
                    },
                    {
                      pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                      isSigner: false,
                      isWritable: true,
                    },
                  ],
                  programId: "11111111111111111111111111111111",
                  data: [2, 0, 0, 0, 0, 194, 235, 11, 0, 0, 0, 0],
                },
              ],
              signers: ["3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ"],
            },
            serializedTx:
              "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEDKRwv/lbUjzM8G6kBJUx7VvnHRwvfdMYBQk2XL4zWDN1NkLxgRs8AP0ydOGHzByWPvNjQIigr+wxHfOOevKbTFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGFtruLO6QakQk61PBCZOAXycOBm6AMVF/KxC4LSCGQBAgIAAQwCAAAAAMLrCwAAAAA=",
          },
        },
        explanation:
          "Unsigned Transaction to transfer 0.2 SOL, equivalently 200000000 lamports of SOL, to the recipient address",
      },
    ],
    [
      {
        input: {
          from: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
          to: "Gv12XDHjNsKB5Y4v4Aj7E3b74STCwd1tUo3BVqevu1BY",
          amount: 100,
          mint: "usdc",
        },
        output: {
          status: "success",
          message: "Transaction generated successfully",
          amount: 100,
          sender: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
          recipient: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
          token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          transaction: {
            tx: {
              recentBlockhash: "FGpWKbzLfQ1N58CyJxcew7DozzSaaDUXUxFcEUwGC6cz",
              feePayer: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
              nonceInfo: null,
              instructions: [
                {
                  keys: [
                    {
                      pubkey: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
                      isSigner: true,
                      isWritable: true,
                    },
                    {
                      pubkey: "EZQvdtF5fbXmdEaansj2cm1PbUfZ4qM2vBaM8SiKJpX7",
                      isSigner: false,
                      isWritable: true,
                    },
                    {
                      pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                      isSigner: false,
                      isWritable: false,
                    },
                    {
                      pubkey: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                      isSigner: false,
                      isWritable: false,
                    },
                    {
                      pubkey: "11111111111111111111111111111111",
                      isSigner: false,
                      isWritable: false,
                    },
                    {
                      pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                      isSigner: false,
                      isWritable: false,
                    },
                  ],
                  programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
                  data: [],
                },
                {
                  keys: [
                    {
                      pubkey: "EyCZgxSqSCrDbYcbLczRVcgjccZdj4APBz8rhSgLEYyz",
                      isSigner: false,
                      isWritable: true,
                    },
                    {
                      pubkey: "EZQvdtF5fbXmdEaansj2cm1PbUfZ4qM2vBaM8SiKJpX7",
                      isSigner: false,
                      isWritable: true,
                    },
                    {
                      pubkey: "3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ",
                      isSigner: true,
                      isWritable: false,
                    },
                  ],
                  programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                  data: [3, 0, 225, 245, 5, 0, 0, 0, 0],
                },
              ],
              signers: ["3mUePxBaD657S5wF4w7WaDVxSWoYTaYnizdbpFwvGKgQ"],
            },
            serializedTx:
              "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUIKRwv/lbUjzM8G6kBJUx7VvnHRwvfdMYBQk2XL4zWDN3PjYfFd4CyCAopXbSf+gNmmOkaKIJ1RjZp7T8uHP+3Hcl1kVeO61unpSiCiuBxyxNcs/OHSFI3YrNo4zPtUkKWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNkLxgRs8AP0ydOGHzByWPvNjQIigr+wxHfOOevKbTFYyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZxvp6877brTo9ZfNqq8l0MbG75MLS9uDkfKYCA0UvXWEG3fbh12Whk9nL4UbO63msHLSF7V9bN5E6jPWFfv8AqdQRCzUc3prTZ7yLJr0ixc+Hg21N1j9DkYqBSfL0Y5GDAgUGAAIEBgMHAAcDAQIACQMA4fUFAAAAAA==",
          },
        },
        explanation:
          "Unsigned Transaction to transfer 1 USDC tokens to the recipient address",
      },
    ],
  ],
  schema: z.object({
    from: z.string().min(32, "Invalid Solana address"),
    to: z.string().min(32, "Invalid Solana address"),
    amount: z.number().positive("Amount must be positive"),
    mint: z.string().optional(),
  }),
  handler: async (agent: SolanaAgentKit, input: Record<string, any>) => {
    try {
      const recipient = new PublicKey(input.to);
      const sender = new PublicKey(input.from);

      let mintAddress: PublicKey | undefined;
      if (!input.mint) {
        // this corresponds to native sol
        mintAddress = undefined;
      } else {
        const mintAddressSupported = supportedTokenAddress(input.mint);
        if (!mintAddressSupported) {
          return {
            status: "error",
            message: "Invalid mint address",
          };
        }
        mintAddress = new PublicKey(mintAddressSupported);
      }

      const tx = await transferUnsigned(
        agent,
        sender,
        recipient,
        input.amount,
        mintAddress,
      );

      return {
        status: "success",
        message: "Transaction generated successfully",
        amount: input.amount,
        sender: input.from,
        recipient: input.to,
        token: mintAddress || "SOL",
        transaction: tx,
      };
    } catch (error: any) {
      return {
        status: "error",
        message: `failed to transfer unsigned: ${error.message}`,
      };
    }
  },
};

export { transferUnsignedAction };
