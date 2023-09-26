// document.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Nurse } from '../nurse-onboarding/nurse.entity';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './document.dto';
import { Document } from './entity/document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
    @InjectRepository(Nurse)
    private readonly nurseRepository: Repository<Nurse>,
  ) {}

  async createDocument(
    createDocumentDto: CreateDocumentDto,
    nurseId: number,
  ): Promise<Document> {
    const nurse = await this.nurseRepository.findOne({
      where: { id: nurseId },
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }

    const document = this.documentRepository.create({
      ...createDocumentDto,
      nurse: nurse, // Associate the document with the nurse
    });

    return this.documentRepository.save(document);
  }

  async getDocumentsByNurseId(nurseId: number): Promise<Document[]> {
    const nurse = await this.nurseRepository.findOne({
      where: { id: nurseId },
      relations: ['documents'],
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }

    return nurse.documents || [];
  }

  async getDocumentById(documentId: number): Promise<Document> {
    const document = await this.documentRepository.findOne({
      where: { id: documentId },
    });

    if (!document) {
      throw new NotFoundException(`Document with ID ${documentId} not found`);
    }

    return document;
  }

  async updateDocument(
    nurseId: number,
    documentId: number,
    updateDocumentDto: CreateDocumentDto,
  ): Promise<Document> {
    const nurse = await this.nurseRepository.findOne({
      where: { id: nurseId },
      relations: ['documents'],
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }

    console.log('nurse details', nurse.documents);
    console.log('nurse details ===>', documentId);

    // Find the document within the nurse's documents
    const document = nurse.documents?.find((doc) => {
      console.log('doc id ', typeof doc.id);
      console.log('doc type ', typeof documentId);
      doc.id == documentId;
    });
    console.log('find document', document);
    if (!document) {
      throw new NotFoundException(
        `Document with ID ${documentId} not found for Nurse with ID ${nurseId}`,
      );
    }

    // Update the document properties
    document.s3_url = updateDocumentDto.s3_url || document.s3_url;
    document.document_type =
      updateDocumentDto.document_type || document.document_type;

    return this.documentRepository.save(document);
  }

  async deleteDocument(nurseId: number, documentId: number): Promise<void> {
    // Find the nurse to ensure they exist
    const nurse = await this.nurseRepository.findOne({
      where: { id: nurseId },
      relations: ['documents'],
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }

    // Find the document within the nurse's documents
    const document = nurse.documents?.find((doc) => doc.id === documentId);

    if (!document) {
      throw new NotFoundException(
        `Document with ID ${documentId} not found for Nurse with ID ${nurseId}`,
      );
    }

    await this.documentRepository.remove(document);
  }
}
