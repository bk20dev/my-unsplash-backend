import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const run = async () => {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000);
};

run();
