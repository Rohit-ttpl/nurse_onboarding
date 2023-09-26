// assessment.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { Assessment } from './assessment.entity';
import { CreateAssessmentDto } from './assessment.dto';

@Controller('assessments')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post()
  create(
    @Body() createAssessmentDto: CreateAssessmentDto,
  ): Promise<Assessment> {
    return this.assessmentService.createAssessment(createAssessmentDto);
  }

  @Get()
  findAll(): Promise<Assessment[]> {
    return this.assessmentService.getAllAssessments();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Assessment> {
    return this.assessmentService.getAssessmentById(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssessmentDto: CreateAssessmentDto,
  ): Promise<Assessment> {
    return this.assessmentService.updateAssessment(
      Number(id),
      updateAssessmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.assessmentService.deleteAssessment(Number(id));
  }
}
