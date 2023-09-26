// question.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  text: string;

  @IsNumber()
  assessmentId: number;
}
