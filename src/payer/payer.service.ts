import { Injectable } from '@nestjs/common';
import { PayerRepo } from './entity/payer.repo';

@Injectable()
export class PayerService {
  constructor(private payerRepo: PayerRepo) {}

  async createPayerService(payer: any) {
    try {
      const payerDetails = await this.payerRepo.getPayerByNPIRepo(
        payer.providerNPI,
      );
      console.log(
        '🚀 ~ file: payer.service.ts:10 ~ PayerService ~ createPayerService ~ payerDetails:',
        payerDetails,
      );
      if (payerDetails) {
        throw new Error(`Payer for Provided NPI ID Exist!`);
      }
      return await this.payerRepo.createPayerRepo(payer);
    } catch (error) {
      console.log(
        '🚀 ~ file: payer.service.ts:20 ~ PayerService ~ createPayerService ~ error:',
        error,
      );
      throw error.message;
    }
  }

  async getPayerByNPIService(npi: string) {
    return await this.payerRepo.getPayerByNPIRepo(npi);
  }
}
