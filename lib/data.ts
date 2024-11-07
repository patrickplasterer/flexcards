'use server';

import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { cardsTable, decksTable, reviewsTable } from "@/db/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export async function getUser() {

    const user = await currentUser();
    return (user);
  
}

export async function getDecks(userId: string) {
    if (userId) {
        const decks = await db.select({ id: decksTable.id, name: decksTable.name, description: decksTable.description, tags: decksTable.tags, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.user, userId)).orderBy(desc(decksTable.createdOn))
        return(decks);
    }
    return []; 
}

export async function getPublicDecks() {
    const decks = await db.select({ id: decksTable.id, name: decksTable.name, isPublic: decksTable.isPublic, description: decksTable.description}).from(decksTable).where(eq(decksTable.isPublic, true)).orderBy(desc(decksTable.createdOn))
    
    return(decks);
}

export async function getCards(deckId: number) {
    if (deckId) {
        const cards = await db.select({ id: cardsTable.id, front: cardsTable.front, back: cardsTable.back, deck: cardsTable.deck}).from(cardsTable).where(eq(cardsTable.deck, deckId)).orderBy(desc(cardsTable.createdOn))
        return(cards);
    }
    return [];
    
}

export async function getCardById(cardId: number) {
    if (cardId) {
        const card = await db.select({ id: cardsTable.id, front: cardsTable.front, back: cardsTable.back, deck: cardsTable.deck}).from(cardsTable).where(eq(cardsTable.id, cardId)).limit(1);
        return(card);
    }
    return [];
    
}

export async function getAllUsers() {
    const allUsers = (await clerkClient()).users

    return(allUsers);
}

export async function getReviews(deckId: number) {
    if (deckId) {
        const reviews = await db.select({ id: reviewsTable.id, body: reviewsTable.body, rating: reviewsTable.rating, user: reviewsTable.user}).from(reviewsTable).where(eq(reviewsTable.deck, deckId)).orderBy(desc(reviewsTable.createdOn))
        return(reviews);
    } 
    return [];
    
}