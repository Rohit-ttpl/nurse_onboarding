import { Module } from '@nestjs/common';
import { PayerController } from './payer.controller';
import { PayerService } from './payer.service';
import { PayerRepo } from './entity/payer.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payer } from './entity/payer.entity';

@Module({
  controllers: [PayerController],
  providers: [PayerService, PayerRepo],
  imports: [TypeOrmModule.forFeature([Payer])],
  exports: [PayerService],
})
export class PayerModule {}
