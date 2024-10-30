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
  revalidatePath('/editor');
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
  let newCard = undefined;
  try {
    newCard = await db.insert(cardsTable).values({front: '', back: '', deck: deckId}).returning()
  } catch(error) {
    return {
      message: 'Database Error: Failed to create card.'
    };
  }
  revalidatePath('/editor');
  if(newCard) redirect(`/editor?deck=${newCard[0].deck}&card=${newCard[0].id}`)
}


export async function deleteCard(cardId: number) {

  try {
    await db.delete(cardsTable).where(eq(cardsTable.id, cardId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to delete card.'
    };
  }
  revalidatePath('/editor');
}


export async function createDeck(userId: string) {
  let newDeck = undefined;
  try {
    newDeck = await db.insert(decksTable).values({name: 'New Deck', user: userId}).returning();
  } catch(error) {
    return {
      message: 'Database Error: Failed to create card.'
    };
  }
  revalidatePath('/editor');
  if(newDeck) redirect(`/editor?deck=${newDeck[0].id}`)
}


export async function deleteDeck(deckId: number) {

  try {
    await db.delete(decksTable).where(eq(decksTable.id, deckId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to delete deck.'
    };
  }
  revalidatePath('/editor');
  redirect('/editor')
}