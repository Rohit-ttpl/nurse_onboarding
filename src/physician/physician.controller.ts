import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PhysicianService } from './physician.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Physician')
@Controller('physician')
export class PhysicianController {
  constructor(private physicianService: PhysicianService) {}

  @Post()
  async createPhysician(@Body() pahysician: any) {
    return await this.physicianService.createPhysicianService(pahysician);
  }

  @Get()
  async getPhysicianByParams(@Query('npi') npi: string) {
    return await this.physicianService.getPhysicianByParamsService(npi);
  }
}
