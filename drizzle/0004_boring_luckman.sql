ALTER TABLE "reviews" RENAME COLUMN "text" TO "body";--> statement-breakpoint
ALTER TABLE "reviews" ADD COLUMN "title" varchar(500) NOT NULL;