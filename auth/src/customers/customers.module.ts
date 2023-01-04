import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "CUSTOMER_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: [process.env.CUSTOMER_MICROSERVICE_HOST],
          queue: process.env.CUSTOMER_MICROSERVICE_QUEUE_NAME,
          queueOptions: {
            durable: false
          },
        }
      }
    ])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule { }
