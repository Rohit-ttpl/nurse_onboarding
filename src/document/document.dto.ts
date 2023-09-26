// create-document.dto.ts
import { IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsString()
  s3_url: string;

  @IsString()
  document_type: string;
}
