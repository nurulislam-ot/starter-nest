import { Module, ValidationPipe } from '@nestjs/common';
import { UserController } from './dto/user.controller';
import { APP_PIPE } from '@nestjs/core';
import { UserService } from './user.service';

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
    UserService,
  ],
})
export class UserModule {}
