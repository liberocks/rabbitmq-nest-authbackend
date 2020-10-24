import { Injectable } from '@nestjs/common';

const apiName = process.env.API_NAME || 'RabbitMQ API'

@Injectable()
export class RootService {
  getGreeting(): string {
    return `Welcome to ${apiName}`;
  }
}
