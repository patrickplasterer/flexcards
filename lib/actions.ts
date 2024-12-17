'use server'

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { not, eq, and, DrizzleError } from 'drizzle-orm'
import { cardsTable, decksTable, hitsTable, flipsTable, reviewsTable, followsTable } from "@/db/schema";
import { redirect } from "next/navigation";
import { Deck } from "@/db/schema";
import { getCards } from "./data";
import { z } from 'zod';
import { delay } from "msw";
 

export async function updatePublic(deckId: number) {

  try {

    await db.update(decksTable).set({ isPublic: not(decksTable.isPublic) }).where(eq(decksTable.id, deckId))

  } catch(error) {
      console.log(error)
  }
  revalidatePath('/editor');
}


export async function updateCard(frontText: string, backText: string, cardId: number) {

  try {
    await db.update(cardsTable).set({ front: frontText, back: backText }).where(eq(cardsTable.id, cardId))
  } catch(error) {
    console.log(error)
  }
  revalidatePath('/editor');
}


export async function createCard(deckId: number) {
  let newCard = undefined;
  try {
    newCard = await db.insert(cardsTable).values({front: '', back: '', deck: deckId}).returning()
  } catch(error) {
    console.log(error);
  }
  revalidatePath('/editor');
  if(newCard) redirect(`/editor?deck=${newCard[0].deck}&card=${newCard[0].id}`)
}

export async function insertCard(deckId: number, front: string, back: string) {
  try {
    await db.insert(cardsTable).values({front: front, back: back, deck: deckId}).returning();
  } catch(error) {
    console.log(error);
  }
}


export async function deleteCard(cardId: number) {

  try {
    await db.delete(cardsTable).where(eq(cardsTable.id, cardId))
  } catch(error) {
    console.log(error);
  }
  revalidatePath('/editor');
}

async function insertDeck(name: string, user: string, description: string | null, tags: string | null) {
  try {
    const newDeck = await db.insert(decksTable).values({name: name, user: user, description: description, tags: tags}).returning();
    return(newDeck[0])
  } catch(error) {
      console.log(error);
      return(error);
  }};


export async function createDeck(formData: FormData) {
  
  const name = formData.get('title') as string;
  const user = formData.get('userId') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;

  let newDeck = undefined;
  try {
    newDeck = await insertDeck(name, user, description, tags) as Deck;
  } catch(error) {
    console.log(error);
    if (error instanceof DrizzleError) {
      return(error.message)
    }
    else {
      throw new Error('Could not create deck.')
    }
  }
  revalidatePath('/editor');
  if(newDeck) redirect(`/editor?deck=${newDeck.id}`)
}

export async function copyDeck(userId: string, oldDeck: Deck) {

  const name = oldDeck.name;
  const user = userId;
  const description = oldDeck.description;
  const tags = oldDeck.tags;
  
  try {
    const newDeck = await insertDeck(name, user, description, tags) as Deck;
    const oldCards = await getCards(oldDeck.id);
    oldCards.map((oldCard) => {
      insertCard(newDeck.id, oldCard.front, oldCard.back);
    })

  } catch(error) {
      console.log(error);
      return(error);
  }
  revalidatePath('/discover/browser');
}


export async function deleteDeck(deckId: number) {

  try {
    await db.delete(cardsTable).where(eq(cardsTable.deck, deckId));
    await db.delete(decksTable).where(eq(decksTable.id, deckId));
  } catch(error) {
      console.log(error)
    };
  revalidatePath('/editor');
  redirect('/editor')
}

export async function updateDeck(formData: FormData) {

  const name = formData.get('title') as string;
  const description = formData.get('description') as string;
  const tags = formData.get('tags') as string;
  const deckId = formData.get('deckId') as string;

  try {
    await db.update(decksTable).set({ name: name, description: description, tags: tags }).where(eq(decksTable.id, Number(deckId)))
  } catch(error) {
      console.log(error);
  }
  revalidatePath('/editor');
}



export async function addHit(userId: string, cardId: number) {
  try {
    await db.insert(hitsTable).values({card: cardId, user: userId, type: 'hit'})
  } catch(error) {
    console.log(error);
  }
}

export async function addMiss(userId: string, cardId: number) {
  try {
    await db.insert(hitsTable).values({card: cardId, user: userId, type: 'miss'})
  } catch(error) {
    console.log(error);
  }
}


export async function addFlip(userId: string, cardId: number) {
  try {
    await db.insert(flipsTable).values({card: cardId, user: userId})
  } catch(error) {
    console.log(error);
  }
}

const ReviewFormSchema = z.object({
  user: z.string(),
  deck: z.coerce.number(),
  rating: z.coerce.number().min(1, 'You must select a rating.'),
  body: z.string().min(10, 'SERVER requires 10 characters.')
});

export type ReviewFormState = {
  success: boolean | undefined,
  errors: {
    user?: string[],
    deck?: string[],
    rating?: string[],
    body?: string[],
  };
  message: string | null;
}

export async function addReview(prevState: ReviewFormState, formData: FormData) {

  await delay(1000);

  const validatedFields = ReviewFormSchema.safeParse({
    user: formData.get('user'),
    deck: formData.get('deck'),
    rating: formData.get('rating'),
    body: formData.get('body')
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'An error occured with the fields. Failed to add review.',
    };
  }
  const { body, deck, user, rating } = validatedFields.data;

  try {
    await db.insert(reviewsTable).values({deck: deck, user: user, body: body, rating: Number(rating)})
    revalidatePath('/discover/browser');
    return {
      success: true,
      errors: {},
      message: 'Review added!',
    }
  } catch(error) {
    if (error instanceof DrizzleError) {
      console.log(error);
      return {
        success: false,
        errors: {},
        message: error.message,
      }
    }
    else {
      console.log(error);
      return {
        success: false,
        errors: {},
        message: "Something went wrong with the database.",
      }
    }
  }
}

export async function createFollow(deckId: number, userId: string) {
  try {
    await db.insert(followsTable).values({user: userId, deck: deckId})
  } catch(error) {
    console.log(error);
  }
  revalidatePath('/discover/browser');
}

export async function deleteFollow(userId: string, deckId: number) {

  try {
    await db.delete(followsTable).where(and(eq(followsTable.user, userId), eq(followsTable.deck, deckId)))
  } catch(error) {
    console.log(error);
  }
  revalidatePath('/discover/browser');
}

export async function deleteReview(reviewId: number) {

  try {
    await db.delete(reviewsTable).where(eq(reviewsTable.id, reviewId))
  } catch(error) {
    console.log(error);
  }
  revalidatePath('/discover/browser');
}