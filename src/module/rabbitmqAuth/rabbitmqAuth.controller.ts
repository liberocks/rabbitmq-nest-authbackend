import { Controller, Get } from '@nestjs/common';
import { RabbitmqAuthService } from './rabbitmqAuth.service';

@Controller('rabbitmq/auth')
export class RabbitmqAuthController {
  constructor(private readonly rabbitmqAuthService: RabbitmqAuthService) { }

  @Get()
  getHello(): string {
    return this.rabbitmqAuthService.getHello();
  }
}
