import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';


// This is an example of a new table. The SQL (what you're familliar with) would look like This
//
// CREATE TABLE "task" (
//	"id" serial PRIMARY KEY NOT NULL,
//	"title" text NOT NULL,
//	"priority" integer DEFAULT 1 NOT NULL
//);
// or something like that 
// when you run `npm run db:generate` it creates that SQL from this code.
export const task = pgTable('task', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1),
});

// Create a table called guest-book. It should have these fields
// id: serial primary key
// user: text not null
// note: text not null
// time_created: timestamp default now 
