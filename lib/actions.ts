'use server'

import { sql } from "drizzle-orm"
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { not, eq } from 'drizzle-orm'
import { decksTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function updatePublic(deckId: number) {

  try {
    const decks = await db.update(decksTable).set({ isPublic: not(decksTable.isPublic) }).where(eq(decksTable.id, deckId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to update isPublic.'
    };
  }
  revalidatePath('/study');
  // redirect('/study');
}