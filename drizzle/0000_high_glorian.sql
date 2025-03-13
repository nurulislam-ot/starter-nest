CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"name" text,
	"password" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
