import { NestFactory } from '@nestjs/core';
import { microserviceOption } from 'constants/microservice';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOption);
  await app.listen();
}
bootstrap();
