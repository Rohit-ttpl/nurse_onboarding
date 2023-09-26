import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplication } from './job-application.entity';
import { JobApplicationController } from './job-application.controller';
import { JobApplicationService } from './job-application.service';
import { User } from '../user/user.entity';
import { Job } from '../job/job.entity';
import { Nurse } from '../nurse-onboarding/nurse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobApplication, User, Job, Nurse])],
  controllers: [JobApplicationController],
  providers: [JobApplicationService],
})
export class JobApplicationModule {}
