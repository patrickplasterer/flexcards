import { integer, pgTable, varchar, pgEnum, timestamp, boolean } from "drizzle-orm/pg-core";



export const cardsTable = pgTable("cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  front: varchar({ length: 3000 }).notNull(),
  back: varchar({ length: 3000 }).notNull(),
  deck: integer("deck").notNull().references(() => decksTable.id),
  createdOn: timestamp().notNull().defaultNow(),
});


export const hitsTypeEnum = pgEnum("hitsType", ["hit", "miss"]);

export const hitsTable = pgTable("hits", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  card: integer("card").references(() => cardsTable.id, {onDelete: 'cascade'}).notNull(),
  user: varchar({ length: 255 }).notNull(),
  createdOn: timestamp().notNull().defaultNow(),
  type: hitsTypeEnum().notNull(),
});


export const flipsTable = pgTable("flips", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  card: integer("card").references(() => cardsTable.id, {onDelete: 'cascade'}).notNull(),
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
  deck: integer().references(() => decksTable.id, {onDelete: 'cascade'}).notNull(),
  body: varchar({ length: 1000 }).notNull(),
  rating: integer().notNull(),
  createdOn: timestamp().notNull().defaultNow(),
});

export const followsTable = pgTable("follows", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: varchar({ length: 255 }).notNull(),
  deck: integer().references(() => decksTable.id, {onDelete: 'cascade'}).notNull(),
  createdOn: timestamp().notNull().defaultNow(),
});

// Types:

export type Card = typeof cardsTable.$inferSelect
export type Hit = typeof hitsTable.$inferSelect
export type Flip = typeof flipsTable.$inferSelect
export type Deck = typeof decksTable.$inferSelect
export type Review = typeof reviewsTable.$inferSelect
export type Follow = typeof followsTable.$inferSelect