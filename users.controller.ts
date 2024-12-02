import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './user.Dto';
import { UsersService } from './users.service';
import { User } from 'src/typeorm/entity/users';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':id')
  findUser(@Param('id') id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: User): Promise<User> {
    return this.usersService.createUserUsingQueryBuilder(createUserDto);
  }
}
