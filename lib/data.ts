'use server';

import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { cardsTable, decksTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server"

export async function getUser() {

    const User = await currentUser();
    return (User);
  
}

export async function getDecks(userId: string) {
    const decks = await db.select({ id: decksTable.id, name: decksTable.name, description: decksTable.description, tags: decksTable.tags, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.user, userId)).orderBy(desc(decksTable.createdOn))
    
    return(decks);
}

export async function getPublicDecks() {
    const decks = await db.select({ id: decksTable.id, name: decksTable.name, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.isPublic, true)).orderBy(desc(decksTable.createdOn))
    
    return(decks);
}

export async function getCards(deckId: number) {
    const cards = await db.select({ id: cardsTable.id, front: cardsTable.front, back: cardsTable.back, deck: cardsTable.deck}).from(cardsTable).where(eq(cardsTable.deck, deckId)).orderBy(desc(cardsTable.createdOn))
    
    return(cards);
}