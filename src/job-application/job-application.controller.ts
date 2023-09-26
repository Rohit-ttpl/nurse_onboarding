import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { JobApplicationService } from './job-application.service';
import { JobApplication } from './job-application.entity';
import {
  CreateJobApplicationDto,
  UpdateJobApplicationDto,
} from './job-application.dto';

@Controller('job-applications')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Get()
  getAllJobApplications(): Promise<JobApplication[]> {
    return this.jobApplicationService.getAllJobApplications();
  }

  @Get(':id')
  getJobApplicationById(@Param('id') id: number): Promise<JobApplication> {
    return this.jobApplicationService.getJobApplicationById(id);
  }

  @Post()
  createJobApplication(
    @Body() createJobApplicationDto: CreateJobApplicationDto,
  ): Promise<JobApplication> {
    return this.jobApplicationService.createJobApplication(
      createJobApplicationDto,
    );
  }

  @Put(':id')
  updateJobApplication(
    @Param('id') id: number,
    @Body() updateJobApplicationDto: UpdateJobApplicationDto,
  ): Promise<JobApplication> {
    return this.jobApplicationService.updateJobApplication(
      id,
      updateJobApplicationDto,
    );
  }

  @Delete(':id')
  deleteJobApplication(@Param('id') id: number): Promise<void> {
    return this.jobApplicationService.deleteJobApplication(id);
  }
}
