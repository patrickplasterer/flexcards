import { integer, pgTable, varchar, pgEnum, timestamp, boolean, check } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";



export const cardsTable = pgTable("cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  front: varchar({ length: 3000 }).notNull(),
  back: varchar({ length: 3000 }).notNull(),
  deck: integer("deck").references(() => decksTable.id),
  createdOn: timestamp().notNull().defaultNow(),
});

export const hitsTypeEnum = pgEnum("hitsType", ["hit", "miss"]);

export const hitsTable = pgTable("hits", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  card: integer("card").references(() => cardsTable.id),
  user: varchar({ length: 255 }).notNull(),
  createdOn: timestamp().notNull().defaultNow(),
  type: hitsTypeEnum(),
});


export const flipsTable = pgTable("flips", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  card: integer("card").references(() => cardsTable.id),
  createdOn: timestamp().notNull().defaultNow(),
});


export const decksTable = pgTable("decks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  user: varchar({ length: 255 }).notNull(),
  createdOn: timestamp().notNull().defaultNow(),
  isPublic: boolean().notNull().default(false),
  description: varchar({length: 1000}),
  tags: varchar({length: 500}),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  deck: integer().references(() => decksTable.id),
  body: varchar({ length: 1000 }).notNull(),
  rating: integer().notNull(),
  createdOn: timestamp().notNull().defaultNow(),
});