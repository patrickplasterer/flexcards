'use server'

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { not, eq } from 'drizzle-orm'
import { cardsTable, decksTable, hitsTable, flipsTable, reviewsTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function updatePublic(deckId: number) {

  try {

    await db.update(decksTable).set({ isPublic: not(decksTable.isPublic) }).where(eq(decksTable.id, deckId))

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


export async function createDeck(formData: FormData) {
  let newDeck = undefined;
  const name = formData.get('title') as string;
  const user = formData.get('userId') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;

  try {
    newDeck = await db.insert(decksTable).values({name: name, user: user, description: description, tags: tags}).returning();
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
    await db.delete(cardsTable).where(eq(cardsTable.deck, deckId));
    await db.delete(decksTable).where(eq(decksTable.id, deckId));
  } catch(error) {
      console.log(error.message)
    };
  revalidatePath('/editor');
  redirect('/editor')
}

export async function updateDeck(formData: FormData) {

  const name = formData.get('title') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;
  const deckId = formData.get('deckId');

  try {
    await db.update(decksTable).set({ name: name, description: description, tags: tags }).where(eq(decksTable.id, deckId))
  } catch(error) {
    return {
      message: 'Database Error: Failed to update deck.'
    };
  }
  revalidatePath('/editor');
}

export async function addHit(userId: string, cardId: number) {
  try {
    await db.insert(hitsTable).values({card: cardId, user: userId, type: 'hit'})
  } catch(error) {
    return {
      message: 'Database Error: Failed to add hit.'
    };
  }
}

export async function addMiss(userId: string, cardId: number) {
  try {
    await db.insert(hitsTable).values({card: cardId, user: userId, type: 'miss'})
  } catch(error) {
    return {
      message: 'Database Error: Failed to add miss.'
    };
  }
}


export async function addFlip(userId: string, cardId: number) {
  try {
    await db.insert(flipsTable).values({card: cardId, user: userId})
  } catch(error) {
    return {
      message: 'Database Error: Failed to add flip.'
    };
  }
}


export async function addReview(formData: FormData) {

  const body = formData.get('body') as string;
  const deckId = formData.get('deck') as string;
  const user = formData.get('user') as string;

  console.log(body);
  console.log(deckId);
  console.log(user);

  try {
    await db.insert(reviewsTable).values({deck: deckId, user: user, body: body, rating: 5})
  } catch(error) {
    return {
      message: 'Database Error: Failed to create review.'
    };
  }
  revalidatePath('/discover/browse');
}