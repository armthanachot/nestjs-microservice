import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

export const userMicroserviceClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
        host: process.env.USER_MICROSERVICE_HOST,
        port: Number(process.env.USER_MICROSERVICE_PORT)
    }
})