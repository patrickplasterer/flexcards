'use server';

import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { cardsTable, decksTable, reviewsTable } from "@/db/schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export async function getUser() {

    const user = await currentUser();
    if (user) {
        return (user);
    } else {
        redirect('/sign-in');
    }
  
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

export async function getAllUsers() {
    const allUsers = (await clerkClient()).users

    return(allUsers);
}

export async function getReviews(deckId: number) {
    const users = getAllUsers();
    const reviews = await db.select({ id: reviewsTable.id, body: reviewsTable.body, rating: reviewsTable.rating, user: reviewsTable.user}).from(reviewsTable).where(eq(reviewsTable.deck, deckId)).orderBy(desc(reviewsTable.createdOn))
    
    return(reviews);
}