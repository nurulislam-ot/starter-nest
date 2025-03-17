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
    return this.database.query.user.findMany();
  }
  async create(user: typeof schema.user.$inferInsert) {
    return this.database.insert(schema.user).values(user);
  }
  async update() {}
  async delete() {}
  async findOne() {}
}
