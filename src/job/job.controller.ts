import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.entity';
import { CreateJobDto, UpdateJobDto } from './job.dto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  getAllJobs(): Promise<Job[]> {
    return this.jobService.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id') id: number): Promise<Job> {
    return this.jobService.getJobById(id);
  }

  @Post()
  createJob(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return this.jobService.createJob(createJobDto);
  }

  @Put(':id')
  updateJob(
    @Param('id') id: number,
    @Body() updateJobDto: UpdateJobDto,
  ): Promise<Job> {
    return this.jobService.updateJob(id, updateJobDto);
  }

  @Delete(':id')
  deleteJob(@Param('id') id: number): Promise<void> {
    return this.jobService.deleteJob(id);
  }
}
