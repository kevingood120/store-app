import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableCors({
    origin(url, callback) {
      console.log(url)
      callback(null, true)
    }   
  })
  await app.listen(6800);
}
bootstrap();
