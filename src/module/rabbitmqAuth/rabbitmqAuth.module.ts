import { Module } from '@nestjs/common';
import { RabbitmqAuthController } from './rabbitmqAuth.controller';
import { RabbitmqAuthService } from './rabbitmqAuth.service';

@Module({
  imports: [],
  controllers: [RabbitmqAuthController],
  providers: [RabbitmqAuthService],
})
export class RabbitmqAuthModule { }
