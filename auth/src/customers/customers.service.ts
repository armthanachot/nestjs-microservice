import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { customerMicroserviceClient } from 'config/microservice.config';

import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CustomersService {
  constructor(@Inject('CUSTOMER_SERVICE') private readonly client: ClientProxy) { } //CUSTOMER_SERVICE like in customer.module
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll() {

    return customerMicroserviceClient.send('findAllCustomers', { name: 'Foo', lastName: 'Bar' })
    // return  customerMicroserviceClient.emit('findAllCustomers', { name: 'Foo', lastName: 'Bar' }) // emit เหมือนจะไม่ได้รับ response จาก microservice side หรืออาจจะเกี่ยวกับ asynchonous
  }

  async sendMessageToRMQ(data: any) {
    // const connection: Connection = await this.client.connect();
    // const channel: Channel = await connection.createChannel();
    // await channel.sendToQueue(process.env.CUSTOMER_MICROSERVICE_QUEUE_NAME, Buffer.from(data));
    return this.client.send({ queue: process.env.CUSTOMER_MICROSERVICE_QUEUE_NAME }, data).toPromise()
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
