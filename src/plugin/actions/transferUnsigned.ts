import { PublicKey } from "@solana/web3.js";
import { Action, SolanaAgentKit } from "solana-agent-kit";
import { z } from "zod";
import { transferUnsigned } from "../tools";

const transferUnsignedAction: Action = {
  name: "TRANSFER_UNSIGNED",
  similes: [
    "send tokens",
    "transfer funds",
    "send money",
    "send sol",
    "transfer tokens",
  ],
  description: `Transfer tokens or SOL to another address (also called as wallet address).`,
  examples: [
    [
      {
        input: {
          to: "8x2dR8Mpzuz2YqyZyZjUbYWKSWesBo5jMx2Q9Y86udVk",
          amount: 1,
        },
        output: {
          status: "success",
          message: "Transfer completed successfully",
          amount: 1,
          recipient: "8x2dR8Mpzuz2YqyZyZjUbYWKSWesBo5jMx2Q9Y86udVk",
          token: "SOL",
          transaction: {
            recentBlockhash: "CpY77XgMcUaZBGn4zKgmKg6qwwEqYQUCh2Abnv7dzxvm",
            feePayer: null,
            nonceInfo: null,
            instructions: [
              {
                keys: [
                  {
                    pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                    isSigner: true,
                    isWritable: true,
                  },
                  {
                    pubkey: "G5WB6LRMSH3XQrazLkoacY17WDM3pZESLra1iK1q2Wk2",
                    isSigner: false,
                    isWritable: true,
                  },
                  {
                    pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                    isSigner: false,
                    isWritable: false,
                  },
                  {
                    pubkey: "So11111111111111111111111111111111111111112",
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
                    pubkey: "G5WB6LRMSH3XQrazLkoacY17WDM3pZESLra1iK1q2Wk2",
                    isSigner: false,
                    isWritable: true,
                  },
                  {
                    pubkey: "G5WB6LRMSH3XQrazLkoacY17WDM3pZESLra1iK1q2Wk2",
                    isSigner: false,
                    isWritable: true,
                  },
                  {
                    pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                    isSigner: true,
                    isWritable: false,
                  },
                ],
                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                data: [3, 0, 132, 215, 23, 0, 0, 0, 0],
              },
            ],
            signers: [],
          },
        },
        explanation:
          "Unsigned Transaction to transfer 0.4 SOL to the recipient address",
      },
    ],
    [
      {
        input: {
          to: "8x2dR8Mpzuz2YqyZyZjUbYWKSWesBo5jMx2Q9Y86udVk",
          amount: 100,
          mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        },
        output: {
          status: "success",
          message: "Transfer completed successfully",
          amount: 100,
          recipient: "8x2dR8Mpzuz2YqyZyZjUbYWKSWesBo5jMx2Q9Y86udVk",
          token: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
          transaction: {
            recentBlockhash: "4s8nAuLY8KiqbSJ9s22jc8AuFfFwtFodMUwJ9rBcjwVy",
            feePayer: null,
            nonceInfo: null,
            instructions: [
              {
                keys: [
                  {
                    pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
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
                    pubkey: "EZQvdtF5fbXmdEaansj2cm1PbUfZ4qM2vBaM8SiKJpX7",
                    isSigner: false,
                    isWritable: true,
                  },
                  {
                    pubkey: "EZQvdtF5fbXmdEaansj2cm1PbUfZ4qM2vBaM8SiKJpX7",
                    isSigner: false,
                    isWritable: true,
                  },
                  {
                    pubkey: "6DnQ5LiT6Qr2z11tEmqEPyLd1ADRJpuqBdgMGR4DRr2Q",
                    isSigner: true,
                    isWritable: false,
                  },
                ],
                programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                data: [3, 64, 66, 15, 0, 0, 0, 0, 0],
              },
            ],
            signers: [],
          },
        },
        explanation:
          "Unsigned Transaction to transfer 1 USDC tokens to the recipient address",
      },
    ],
  ],
  schema: z.object({
    to: z.string().min(32, "Invalid Solana address"),
    amount: z.number().positive("Amount must be positive"),
    mint: z.string().optional(),
  }),
  handler: async (agent: SolanaAgentKit, input: Record<string, any>) => {
    const recipient = new PublicKey(input.to);
    const mintAddress = input.mint ? new PublicKey(input.mint) : undefined;

    const tx = await transferUnsigned(
      agent,
      recipient,
      input.amount,
      mintAddress,
    );

    return {
      status: "success",
      message: "Transfer completed successfully",
      amount: input.amount,
      recipient: input.to,
      token: input.mint || "SOL",
      transaction: tx,
    };
  },
};

export { transferUnsignedAction };
