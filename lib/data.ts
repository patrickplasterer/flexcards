'use server';

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { cardsTable, decksTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server"

export async function getUser() {

    const User = await currentUser();
    return (User);
  
}

export async function getDecks(userId: string) {
    const decks = await db.select({ id: decksTable.id, name: decksTable.name, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.user, userId)).orderBy(decksTable.name)
    
    return(decks);
}

export async function getCards(deckId: number) {
    const cards = await db.select({ id: cardsTable.id, front: cardsTable.front, back: cardsTable.back}).from(cardsTable).where(eq(cardsTable.deck, deckId))
    
    return(cards);
}