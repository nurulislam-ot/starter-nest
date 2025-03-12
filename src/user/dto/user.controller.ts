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
import { CreateUserDto } from '../user.dto';
import { IdParamDto } from './id-param.dto';

import { UserService } from '../user.service';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';
import { CreateUserSchema, CreateUserZodType } from './user-zod.dto';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

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
    console.log(body);
    return this.service.create();
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
