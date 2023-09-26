import { Test, TestingModule } from '@nestjs/testing';
import { ReferralIntakeController } from './referral-intake.controller';

describe('ReferralIntakeController', () => {
  let controller: ReferralIntakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferralIntakeController],
    }).compile();

    controller = module.get<ReferralIntakeController>(ReferralIntakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
