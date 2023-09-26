import { InjectRepository } from '@nestjs/typeorm';
import { Payer } from './payer.entity';
import { Repository } from 'typeorm';

export class PayerRepo {
  constructor(
    @InjectRepository(Payer)
    private payerRepo: Repository<Payer>,
  ) {}

  async createPayerRepo(payer: any) {
    return await this.payerRepo.save(payer);
  }

  async getPayerByNPIRepo(npi: string) {
    return await this.payerRepo.findOne({
      where: {
        providerNPI: npi,
      },
    });
  }
}
