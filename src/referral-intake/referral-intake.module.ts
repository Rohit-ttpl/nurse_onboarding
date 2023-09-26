import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferralIntakeController } from './referral-intake.controller';
import { ReferralIntakeService } from './referral-intake.service';
import { PatientRepository } from './entity/patient.repo';
import { Patient } from './entity/patient.entity';
import { PhysicianService } from '../physician/physician.service';
import { PhysicianRepo } from '../physician/entity/physician.repo';
import { Physician } from '../physician/entity/physician.entity';
import { PayerRepo } from '../payer/entity/payer.repo';
import { PayerService } from '../payer/payer.service';
import { Payer } from '../payer/entity/payer.entity';

@Module({
  controllers: [ReferralIntakeController],
  providers: [
    ReferralIntakeService,
    PatientRepository,
    PhysicianService,
    PhysicianRepo,
    PayerService,
    PayerRepo,
  ],
  imports: [TypeOrmModule.forFeature([Patient, Physician, Payer])],
  exports: [ReferralIntakeService, PhysicianService, PayerService],
})
export class ReferralIntakeModule {}
