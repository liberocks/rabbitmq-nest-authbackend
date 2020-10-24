import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitmqAuthService {
  getHello(): string {
    return 'Hello World!!';
  }
}
