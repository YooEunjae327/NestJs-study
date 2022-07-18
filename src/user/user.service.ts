import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user. repository';
import { UserController } from './user.controller';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getHello(): string {
    return 'study';
  }

  public async getUserInfo(dto: CreateUserDto): Promise<string> {
    const user = await this.userRepository.find();
    console.log(user);
    return 'test';
  }

  public async getInfoFe(dto: CreateUserDto): Promise<void> {
    this.userRepository.save(dto);
  }
}
