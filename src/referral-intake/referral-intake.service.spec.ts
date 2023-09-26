import { Test, TestingModule } from '@nestjs/testing';
import { ReferralIntakeService } from './referral-intake.service';

describe('ReferralIntakeService', () => {
  let service: ReferralIntakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferralIntakeService],
    }).compile();

    service = module.get<ReferralIntakeService>(ReferralIntakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
