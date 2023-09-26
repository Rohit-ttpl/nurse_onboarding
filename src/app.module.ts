import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferralIntakeModule } from './referral-intake/referral-intake.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicianModule } from './physician/physician.module';
import { PayerModule } from './payer/payer.module';
import { NurseOnboardingModule } from './nurse-onboarding/nurse-onboarding.module';
import { JobModule } from './job/job.module';
import { JobApplicationModule } from './job-application/job-application.module';
import { UserModule } from './user/user.module';
import { DocumentModule } from './document/document.module';
import { AssessmentModule } from './assessment/assessment.module';
import { QuestionModule } from './question/question.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'mydatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReferralIntakeModule,
    PhysicianModule,
    PayerModule,
    NurseOnboardingModule,
    JobModule,
    JobApplicationModule,
    UserModule,
    DocumentModule,
    AssessmentModule,
    QuestionModule,
    OptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
