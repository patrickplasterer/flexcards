ALTER TABLE "decks" DROP CONSTRAINT "decks_user_users_id_fk";
--> statement-breakpoint
ALTER TABLE "flips" DROP CONSTRAINT "flips_user_users_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_user_users_id_fk";
--> statement-breakpoint
ALTER TABLE "decks" ALTER COLUMN "user" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "decks" ALTER COLUMN "user" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "flips" ALTER COLUMN "user" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "flips" ALTER COLUMN "user" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "user" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "reviews" ALTER COLUMN "user" SET NOT NULL;
DROP TABLE "users";--> statement-breakpoint