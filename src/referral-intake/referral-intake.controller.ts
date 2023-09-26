import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReferralIntakeService } from './referral-intake.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Patient')
@Controller('referral-intake')
export class ReferralIntakeController {
  constructor(private referralIntakeService: ReferralIntakeService) {}

  @Post('/patient')
  async addPatientDetials(@Body() patient: any) {
    return await this.referralIntakeService.addPatientDetialsService(patient);
  }

  @Get('')
  async getAllReferaalIntakes() {
    return await this.referralIntakeService.getAllReferaalIntakesService();
  }
}
