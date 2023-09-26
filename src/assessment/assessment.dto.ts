// assessment.dto.ts
import { IsString } from 'class-validator';

export class CreateAssessmentDto {
  @IsString()
  title: string;
}
