import { eq } from "drizzle-orm";
import { db } from ".";
import { decksTable } from "./schema";

export async function getDecks(userID: number) {
    const decks = await db.select({ name: decksTable.name, isPublic: decksTable.isPublic}).from(decksTable).where(eq(decksTable.owner, userID))
    
    return(
        decks
    );
}