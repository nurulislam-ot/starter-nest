import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { IdParamDto } from './dto/id-param.dto';

import { UsersService } from './users.service';
import { ZodValidationPipe } from './pipes/zod-validation.pipe';
import { CreateUserSchema, CreateUserZodType } from './dto/user-zod.dto';

@Controller('users')
export class UserController {
  constructor(private service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  // @HttpCode(201)
  create(
    // @Body(new ValidationPipe({ groups: ['create'] }))
    @Body() body: CreateUserZodType,
  ) {
    return this.service.create(body);
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe({ whitelist: true }))
  // @HttpCode(201)
  update(
    // @Param('id', ParseIdPipe) id: number,
    @Param() param: IdParamDto,
    @Body(new ValidationPipe({ groups: ['update'] })) body: CreateUserDto,
  ) {
    console.log(param, body);
    return this.service.update();
  }

  @Delete()
  delete() {
    return this.service.delete();
  }

  @Get(':id/:name')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Param('name') name: string,
    @Query('filter', ParseBoolPipe) filter: boolean,
  ) {
    console.log(typeof filter, name);
    return this.service.findOne();
  }
}
