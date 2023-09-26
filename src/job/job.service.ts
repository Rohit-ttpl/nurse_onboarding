import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto, UpdateJobDto } from './job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobRepository.create(createJobDto);
    return this.jobRepository.save(job);
  }

  async getAllJobs(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async getJobById(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { id: id } });
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async updateJob(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
    await this.getJobById(id);
    await this.jobRepository.update(id, updateJobDto);
    return this.getJobById(id);
  }

  async deleteJob(id: number): Promise<void> {
    await this.getJobById(id);
    await this.jobRepository.delete(id);
  }
}
