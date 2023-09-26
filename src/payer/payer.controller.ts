import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PayerService } from './payer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payers')
@Controller('payer')
export class PayerController {
  constructor(private payerService: PayerService) {}

  @Post('')
  async createPayer(@Body() payer: any) {
    return await this.payerService.createPayerService(payer);
  }

  @Get('')
  async getPayer(@Param('npi') npi: string) {
    return await this.payerService.getPayerByNPIService(npi);
  }
}
