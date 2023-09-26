// option.dto.ts
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  text: string;

  @IsBoolean()
  isCorrect: boolean;

  @IsNumber()
  questionId: number;
}
