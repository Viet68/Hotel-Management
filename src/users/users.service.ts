import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";

import {Repository} from "typeorm";
import {Users} from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(Users)
      private userRepository : Repository<Users>,
      ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(){
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user: ${updateUserDto.name}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
