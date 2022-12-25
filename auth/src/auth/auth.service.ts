import { Injectable } from '@nestjs/common';
import { userMicroserviceClient } from 'config/microservice.config';
import { catchError, of } from 'rxjs';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
@Injectable()
export class AuthService {
  constructor() {

  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  login(payload: { userName: string, password: string }) {
    return userMicroserviceClient.send('login', payload)
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
