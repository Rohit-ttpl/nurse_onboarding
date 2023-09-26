import { Module } from '@nestjs/common';
import { PhysicianController } from './physician.controller';
import { PhysicianService } from './physician.service';
import { PhysicianRepo } from './entity/physician.repo';
import { Physician } from './entity/physician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PhysicianController],
  providers: [PhysicianService, PhysicianRepo],
  imports: [TypeOrmModule.forFeature([Physician])],
  exports: [PhysicianService],
})
export class PhysicianModule {}
