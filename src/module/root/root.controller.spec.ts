import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';
import { RootService } from './root.service';

describe('RootController', () => {
  let rootController: RootController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService],
    }).compile();

    rootController = app.get<RootController>(RootController);
  });

  describe('controller', () => {
    it('should be defined', () => {
      expect(rootController).toBeDefined()
    })
  })

  describe('endpoint', () => {
    it('should return welcome message', () => {
      expect(rootController.getGreeting()).toMatch(/Welcome/i);
    });
  });
});
