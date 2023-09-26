// nurse.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { NurseDto, NurseResidenceDto } from './nurse.dto';
import { NurseService } from './nurse.service';
import { Education } from './education.entity';

@Controller('nurse')
export class NurseController {
  constructor(private readonly nurseService: NurseService) {}

  @Post('onboard')
  async onboard(@Body() dto: NurseDto) {
    const nurse = await this.nurseService.onboard1(dto);
    return { message: 'Nurse onboarded successfully', data: nurse };
  }

  @Get('all')
  async getAllNurses() {
    const nurses = await this.nurseService.getAllNurses();
    return { data: nurses };
  }

  @Get(':id')
  async getNurseById(@Param('id') id: number) {
    const nurse = await this.nurseService.getNurseById(id);
    return { data: nurse };
  }

  // @Put(':id')
  // async updateNurseById(
  //   @Param('id') id: number,
  //   @Body() dto: NurseDto, // Use the NurseDto to send update data
  // ) {
  //   const updatedNurse = await this.nurseService.updateNurseById(id, dto);
  //   return { message: 'Nurse updated successfully', data: updatedNurse };
  // }

  @Delete(':id')
  async deleteNurseById(@Param('id') id: number) {
    await this.nurseService.deleteNurseById(id);
    return { message: 'Nurse deleted successfully' };
  }

  @Put(':id/education')
  async updateEducation(
    @Param('id') id: number,
    @Body() education: Education, // Use the Education entity for updates
  ) {
    const updatedNurse = await this.nurseService.updateEducation(id, education);
    return {
      message: 'Education records updated successfully',
      data: updatedNurse,
    };
  }

  @Put('update-residence/:id')
  async UpdateNurseResidence(
    @Param('id') id: number,
    @Body() dto: NurseResidenceDto,
  ) {
    const nurse = await this.nurseService.UpdateNurseResidence(dto, id);
    return {
      message: 'Nurse residence details updated successfully',
      data: nurse,
    };
  }
}
