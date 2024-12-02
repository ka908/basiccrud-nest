import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entity/users';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async getUser(id: number): Promise<User> {
    // Get the user with the given id
    const user = await this.usersRepository.findOne({ where: { id } });
    // Return the user
    return user;

    //
  }
  async createUserUsingQueryBuilder(userData: User): Promise<User> {
    // Using QueryBuilder to insert data
    const user = await this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(userData)
      .execute();

    // Return the inserted user
    return userData;
  }
}
