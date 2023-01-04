import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { customerMicroserviceClient } from 'config/microservice.config';

import { Connection, Channel } from 'amqplib';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CustomersService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {
    return customerMicroserviceClient.send('findAllCustomers', { name: 'Foo', lastName: 'Bar' })
    // return  customerMicroserviceClient.emit('findAllCustomers', { name: 'Foo', lastName: 'Bar' }) // emit เหมือนจะไม่ได้รับ response จาก microservice side หรืออาจจะเกี่ยวกับ asynchonous
  }

  async sendMessageToRMQ(message) {
    const connection: Connection = await customerMicroserviceClient.connect()
    const channel: Channel = await connection.createChannel();
    await channel.sendToQueue(process.env.CUSTOMER_MICROSERVICE_QUEUE_NAME, Buffer.from(message));
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
