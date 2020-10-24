import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { AppLoggerMiddleware } from '../common/AppLoggerMiddleware'

import { RootModule } from './root'
import { AuthModule } from './auth'
import { RabbitmqAuthModule } from './rabbitmqAuth'

const modules = [RootModule, AuthModule, RabbitmqAuthModule]

@Module({
  imports: modules,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*')
  }
}
