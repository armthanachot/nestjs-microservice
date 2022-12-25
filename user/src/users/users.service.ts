import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { StatusCodes } from 'http-status-codes'
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  login(payload: { userName: string, password: string }) {
    if (payload.userName === 'ADMIN' && payload.password === '123456') {
      return {
        code: StatusCodes.OK,
        status: true,
        message: 'OK'
      }
    }
    return {
      code: StatusCodes.UNAUTHORIZED,
      status: false,
      message: `USERNAME_OR_PASSWORD_IS_INVALID`
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
