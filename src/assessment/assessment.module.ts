import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assessment } from './assessment.entity';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Assessment])],
  providers: [AssessmentService],
  controllers: [AssessmentController],
})
export class AssessmentModule {}
