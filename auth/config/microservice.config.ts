import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices'

export const userMicroserviceClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.TCP,
    options: {
        host: process.env.USER_MICROSERVICE_HOST,
        port: Number(process.env.USER_MICROSERVICE_PORT)
    }
})

export const customerMicroserviceClient: ClientProxy = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
        urls: [process.env.CUSTOMER_MICROSERVICE_HOST],
        queue: process.env.CUSTOMER_MICROSERVICE_QUEUE_NAME,
        queueOptions: {
            durable: false
        },
    }
})
