// document.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateDocumentDto } from './document.dto';
import { DocumentService } from './document.service';
import { Document } from './entity/document.entity';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  async createDocumentForNurse(
    @Body() createDocumentDto: CreateDocumentDto,
    @Param('nurseId') nurseId: number,
  ): Promise<Document> {
    const document = this.documentService.createDocument(
      createDocumentDto,
      nurseId,
    );
    return document;
  }

  @Get('/:nurseId')
  getDocumentsByNurseId(@Param('nurseId') nurseId: number) {
    return this.documentService.getDocumentsByNurseId(nurseId);
  }

  @Put('/:nurseId/:documentId')
  updateDocument(
    @Param('nurseId') nurseId: number,
    @Param('documentId') documentId: number,
    @Body() updateDocumentDto: CreateDocumentDto,
  ) {
    return this.documentService.updateDocument(
      nurseId,
      documentId,
      updateDocumentDto,
    );
  }

  @Delete('/:nurseId/:documentId')
  deleteDocument(
    @Param('nurseId') nurseId: number,
    @Param('documentId') documentId: number,
  ) {
    return this.documentService.deleteDocument(nurseId, documentId);
  }
}
