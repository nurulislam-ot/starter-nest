import { Module, ValidationPipe } from '@nestjs/common';
import { UserController } from './users.controller';
import { APP_PIPE } from '@nestjs/core';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    },
    UsersService,
  ],
  imports: [DatabaseModule],
})
export class UsersModule {}
