// document.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { Nurse } from '../nurse-onboarding/nurse.entity';
import { Document } from './entity/document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document, Nurse])],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}
