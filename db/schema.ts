import { integer, pgTable, varchar, pgEnum, timestamp, boolean, check } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";




export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().default('Guest'),
  email: varchar({ length: 255 }).notNull().default('guest@guest.com'),
  password: varchar({ length: 255 }).notNull().default('guest'),
});


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
  createdOn: timestamp().notNull().defaultNow(),
  type: hitsTypeEnum(),
});


export const flipsTable = pgTable("flips", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user: integer("user").references(() => usersTable.id),
  card: integer("card").references(() => cardsTable.id),
  createdOn: timestamp().notNull().defaultNow(),
});


export const decksTable = pgTable("decks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  owner: integer("user").references(() => usersTable.id),
  createdOn: timestamp().notNull().defaultNow(),
  isPublic: boolean().notNull().default(false),
});

export const reviewsTable = pgTable("reviews", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  owner: integer("user").references(() => usersTable.id),
  deck: integer("deck").references(() => decksTable.id),
  createdOn: timestamp().notNull().defaultNow(),
  stars: integer().notNull(),
  text: varchar({ length: 1000 }).notNull()
});