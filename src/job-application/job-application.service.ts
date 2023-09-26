import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobApplication } from './job-application.entity';
import {
  CreateJobApplicationDto,
  UpdateJobApplicationDto,
} from './job-application.dto';
import { User } from '../user/user.entity';
import { Job } from '../job/job.entity';
import { Nurse } from '../nurse-onboarding/nurse.entity';

@Injectable()
export class JobApplicationService {
  constructor(
    @InjectRepository(JobApplication)
    private readonly jobApplicationRepository: Repository<JobApplication>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
    @InjectRepository(Nurse)
    private readonly nurseRepository: Repository<Nurse>,
  ) {}

  async createJobApplication(
    createJobApplicationDto: CreateJobApplicationDto,
  ): Promise<any> {
    const user = this.userRepository.create({
      first_name: createJobApplicationDto.first_name,
      last_name: createJobApplicationDto.last_name,
      email: createJobApplicationDto.email,
      role: createJobApplicationDto.role,
    });

    // user.nurse = nurse; // Associate the user with the nurse

    const savedUser = await this.userRepository.save(user);
    console.log('savedUser===>', savedUser);

    const nurse = this.nurseRepository.create({
      first_name: createJobApplicationDto.first_name,
      last_name: createJobApplicationDto.last_name,
      email: createJobApplicationDto.email,
      // Add other nurse-related fields as needed
    });
    await this.nurseRepository.save(nurse);

    const jobApplication = this.jobApplicationRepository.create({
      user: user,
      status: createJobApplicationDto.status,
      applicationFormStatus: createJobApplicationDto.applicationFormStatus,
      nurse: nurse,
    });

    const job = await this.jobRepository.findOne({
      where: { id: createJobApplicationDto.jobId },
    });
    if (!job) {
      throw new NotFoundException(
        `Job with ID ${createJobApplicationDto.jobId} not found`,
      );
    }

    jobApplication.job = job;

    return this.jobApplicationRepository.save(jobApplication);
  }

  async getAllJobApplications(): Promise<JobApplication[]> {
    return this.jobApplicationRepository.find();
  }

  async getJobApplicationById(id: number): Promise<JobApplication> {
    const jobApplication = await this.jobApplicationRepository.findOne({
      where: { id: id },
    });
    if (!jobApplication) {
      throw new NotFoundException(`Job Application with ID ${id} not found`);
    }
    return jobApplication;
  }

  async updateJobApplication(
    id: number,
    updateJobApplicationDto: UpdateJobApplicationDto,
  ): Promise<JobApplication> {
    await this.getJobApplicationById(id);
    await this.jobApplicationRepository.update(id, updateJobApplicationDto);
    return this.getJobApplicationById(id);
  }

  async deleteJobApplication(id: number): Promise<void> {
    await this.getJobApplicationById(id);
    await this.jobApplicationRepository.delete(id);
  }
}
