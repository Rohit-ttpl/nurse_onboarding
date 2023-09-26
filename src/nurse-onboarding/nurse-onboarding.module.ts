import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NurseController } from './nurse.controller';
import { NurseService } from './nurse.service';
import { Nurse } from './nurse.entity';
import { Education } from './education.entity';
import { Employment } from './employment.entity';
import { NurseMapper } from './nurse.mapper';
import { Certification } from './certification.entity';
import { Address } from './address.entity';
import { Contact } from './contact.entity';
import { JobApplication } from '../job-application/job-application.entity';
// import { JobApplicationService } from '../job-application/job-application.service';
import { Document } from '../document/entity/document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Nurse,
      Education,
      Employment,
      Certification,
      Address,
      Contact,
      JobApplication,
      Document,
    ]),
    // Add other modules or dependencies here
  ],
  controllers: [NurseController],
  providers: [NurseService, NurseMapper],
  exports: [NurseService], // Make the NurseService available for injection in other modules
})
export class NurseOnboardingModule {}
