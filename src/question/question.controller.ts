// question.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './question.dto';
import { Question } from './question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionService.getAllQuestions();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Question> {
    return this.questionService.getQuestionById(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    return this.questionService.updateQuestion(Number(id), updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.questionService.deleteQuestion(Number(id));
  }
}
