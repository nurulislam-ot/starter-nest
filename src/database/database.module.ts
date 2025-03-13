import { Pool } from 'pg';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as userSchema from '../users/schema';

@Module({
  providers: [
    {
      provide: 'DRIZZLE_DB',
      useFactory: (service: ConfigService) => {
        const pool = new Pool({
          connectionString: service.getOrThrow('DATABASE_URL'),
        });

        return drizzle(pool, {
          schema: {
            ...userSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['DRIZZLE_DB'],
})
export class DatabaseModule {}
