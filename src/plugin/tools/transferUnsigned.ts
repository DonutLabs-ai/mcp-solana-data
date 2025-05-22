import {
  createAssociatedTokenAccountInstruction,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";

/**
 * Transfer SOL or SPL tokens to a recipient
 * @param agent SolanaAgentKit instance
 * @param to Recipient's public key
 * @param amount Amount to transfer
 * @param mint Optional mint address for SPL tokens
 * @returns Transaction signature
 */
export async function transferUnsigned(
  agent: SolanaAgentKit,
  from: PublicKey,
  to: PublicKey,
  amount: number,
  mint?: PublicKey,
) {
  try {
    let tx: Awaited<Transaction>;
    let serializedTx: Awaited<string>;

    if (!mint) {
      // Transfer native SOL
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: from,
          toPubkey: to,
          lamports: amount * LAMPORTS_PER_SOL,
        }),
      );

      const { blockhash } = await agent.connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = from;

      tx = transaction;
      serializedTx = transaction
        .serialize({ requireAllSignatures: false })
        .toString("base64");
    } else {
      const transaction = new Transaction();
      // Transfer SPL token
      const fromAta = await getAssociatedTokenAddress(mint, from);
      const toAta = await getAssociatedTokenAddress(mint, to);

      try {
        await getAccount(agent.connection, toAta);
      } catch {
        // Error is thrown if the tokenAccount doesn't exist
        transaction.add(
          createAssociatedTokenAccountInstruction(from, toAta, to, mint),
        );
      }

      // Get mint info to determine decimals
      const mintInfo = await getMint(agent.connection, mint);
      const adjustedAmount = amount * Math.pow(10, mintInfo.decimals);

      transaction.add(
        createTransferInstruction(fromAta, toAta, from, adjustedAmount),
      );

      const { blockhash } = await agent.connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = from;

      tx = transaction;
      serializedTx = transaction
        .serialize({ requireAllSignatures: false })
        .toString("base64");
    }

    return { tx, serializedTx };
  } catch (error: any) {
    throw new Error(`Transfer failed: ${error}`);
  }
}
