import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microserviceOption = { 
  transport: Transport.TCP,
  options: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOption);
  await app.listen();
}
bootstrap();
