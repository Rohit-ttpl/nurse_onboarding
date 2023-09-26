// assessment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assessment } from './assessment.entity';
import { CreateAssessmentDto } from './assessment.dto';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectRepository(Assessment)
    private readonly assessmentRepository: Repository<Assessment>,
  ) {}

  async createAssessment(
    createAssessmentDto: CreateAssessmentDto,
  ): Promise<Assessment> {
    const assessment = this.assessmentRepository.create(createAssessmentDto);
    return await this.assessmentRepository.save(assessment);
  }

  async getAllAssessments(): Promise<Assessment[]> {
    return await this.assessmentRepository.find();
  }

  async getAssessmentById(assessmentId: number): Promise<Assessment> {
    const assessment = await this.assessmentRepository.findOne({
      where: { id: assessmentId },
    });
    if (!assessment) {
      throw new NotFoundException(
        `Assessment with ID ${assessmentId} not found`,
      );
    }
    return assessment;
  }

  async updateAssessment(
    assessmentId: number,
    updateData: CreateAssessmentDto,
  ): Promise<Assessment> {
    await this.getAssessmentById(assessmentId);
    await this.assessmentRepository.update(assessmentId, updateData);
    return this.getAssessmentById(assessmentId);
  }

  async deleteAssessment(assessmentId: number): Promise<void> {
    await this.getAssessmentById(assessmentId);
    await this.assessmentRepository.delete(assessmentId);
  }
}
