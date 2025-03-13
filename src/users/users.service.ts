import { Inject, Injectable } from '@nestjs/common';
import * as schema from './schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class UsersService {
  constructor(
    @Inject('DRIZZLE_DB')
    private readonly database: NodePgDatabase<typeof schema>,
  ) {}
  async findAll() {
    return this.database.query.users.findMany();
  }
  async create(user: typeof schema.users.$inferInsert) {
    return this.database.insert(schema.users).values(user);
  }
  async update() {}
  async delete() {}
  async findOne() {}
}
