// question.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const question = this.questionRepository.create(createQuestionDto);
    return await this.questionRepository.save(question);
  }

  async getAllQuestions(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async getQuestionById(questionId: number): Promise<Question> {
    const question = await this.questionRepository.findOne({
      where: { id: questionId },
    });
    if (!question) {
      throw new NotFoundException(`Question with ID ${questionId} not found`);
    }
    return question;
  }

  async updateQuestion(
    questionId: number,
    updateData: CreateQuestionDto,
  ): Promise<Question> {
    await this.getQuestionById(questionId);
    await this.questionRepository.update(questionId, updateData);
    return this.getQuestionById(questionId);
  }

  async deleteQuestion(questionId: number): Promise<void> {
    await this.getQuestionById(questionId);
    await this.questionRepository.delete(questionId);
  }
}
