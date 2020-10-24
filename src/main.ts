import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './module';

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const logger = new Logger('Main')

  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    logger.log(`Server is running on port ${PORT}`)
  });
}
bootstrap();
