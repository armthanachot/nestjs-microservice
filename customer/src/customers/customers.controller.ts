import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @MessagePattern('createCustomer')
  create(@Payload() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @MessagePattern('findAllCustomers')
  findAll(@Payload() data: number[], @Ctx() context: RmqContext) {
    const message = context.getMessage()
    const content = JSON.parse(message.content.toString())
    const resp = this.customersService.findAll();
    return content
  }

  @MessagePattern('findOneCustomer')
  findOne(@Payload() id: number) {
    return this.customersService.findOne(id);
  }

  @MessagePattern('updateCustomer')
  update(@Payload() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(updateCustomerDto.id, updateCustomerDto);
  }

  @MessagePattern('removeCustomer')
  remove(@Payload() id: number) {
    return this.customersService.remove(id);
  }
}
