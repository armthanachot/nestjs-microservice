import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(process.env.APP_PORT,()=>{
    console.log(`APP IS RUNNING ON ${process.env.APP_PORT}`);
    
  });
}
bootstrap();
