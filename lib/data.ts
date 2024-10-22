'use server';

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { decksTable } from "@/db/schema";

export async function getDecks(userID: number) {
    const decks = await db.select({ id: decksTable.id, name: decksTable.name, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.owner, userID))
    
    return(decks);
}