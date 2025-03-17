import { pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

import { user } from 'src/users/schema';

export const occupationEnum = pgEnum('occupation', ['student', 'job-holder']);

export const profile = pgTable('profiles', {
  id: uuid('id').primaryKey().notNull().defaultRandom(),
  userId: uuid('user_id')
    .notNull()
    .references(() => user.id)
    .unique(),
  avatar: varchar('avatar'),
  address: varchar('address'),
  occupation: occupationEnum('occupation'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('update_at').defaultNow(),
});
