import { integer, pgTable, varchar, pgEnum, timestamp, boolean, check } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";



export const cardsTable = pgTable("cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  front: varchar({ length: 3000 }).notNull(),
  back: varchar({ length: 3000 }).notNull(),
  deck: integer("deck").references(() => decks.id),
  createdOn: timestamp().notNull().defaultNow(),
});

export const hitsTypeEnum = pgEnum("hitsType", ["hit", "miss"]);

export const hitsTable = pgTable("hits", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  card: integer("card").references(() => cards.id),
  createdOn: timestamp().notNull().defaultNow(),
  type: hitsTypeEnum(),
});


export const flipsTable = pgTable("flips", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  card: integer("card").references(() => cards.id),
  createdOn: timestamp().notNull().defaultNow(),
});


export const decksTable = pgTable("decks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  user: varchar({ length: 255 }).notNull(),
  createdOn: timestamp().notNull().defaultNow(),
  isPublic: boolean().notNull().default(false),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  deckId: integer("deck").references(() => decks.id),
  createdOn: timestamp().notNull().defaultNow(),
  stars: integer().notNull(),
  text: varchar({ length: 1000 }).notNull()
});