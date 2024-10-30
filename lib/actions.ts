'use server'

import { sql } from "drizzle-orm"
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { not, eq } from 'drizzle-orm'
import { cardsTable, decksTable } from "@/db/schema";
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


export async function updateCard(frontText: string, backText: string, cardId: number) {

  try {
    await db.update(cardsTable).set({ front: frontText, back: backText }).where(eq(cardsTable.id, cardId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to update card.'
    };
  }
  revalidatePath('/editor');
}


export async function createCard(deckId: number) {

  try {
    await db.insert(cardsTable).values({front: '', back: '', deck: deckId})
  } catch(error) {
    return {
      message: 'Database Error: Failed to create card.'
    };
  }
  revalidatePath('/editor');
}


export async function deleteCard(cardId: number) {
  console.log(cardId)

  try {
    await db.delete(cardsTable).where(eq(cardsTable.id, cardId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to create card.'
    };
  }
  revalidatePath('/editor');
}