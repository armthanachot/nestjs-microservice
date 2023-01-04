import { Transport } from "@nestjs/microservices"

const microserviceOption = { 
    transport: Transport.RMQ,
    options: {
      urls:[process.env.CUSTOMER_MICROSERVICE_HOST], //amqp://username:password@host:port => host = server host
      //docker run -d --hostname rabbitmq --name rabbitmq-server -p 15672:15672 -p 5672:5672 -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin rabbitmq:3-management
      queue:process.env.QUEUE_NAME,
      queueOptions: {
        durable: false
      },
    }
  }

  export {
    microserviceOption
  }