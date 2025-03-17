import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').unique(),
  name: text('name'),
  password: text('password'),
});
