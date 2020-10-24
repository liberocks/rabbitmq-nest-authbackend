import { Test, TestingModule } from '@nestjs/testing';
import { RabbitmqAuthController } from './rabbitmqAuth.controller';
import { RabbitmqAuthService } from './rabbitmqAuth.service';

describe('RabbitmqAuthController', () => {
  let authController: RabbitmqAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RabbitmqAuthController],
      providers: [RabbitmqAuthService],
    }).compile();

    authController = app.get<RabbitmqAuthController>(RabbitmqAuthController);
  });

  describe('controller', () => {
    it('should be defined', () => {
      expect(authController).toBeDefined();
    });
  });
});
