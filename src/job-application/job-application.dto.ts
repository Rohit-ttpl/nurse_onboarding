// create-job-application.dto.ts

export class CreateJobApplicationDto {
  status: string;
  applicationFormStatus: string;
  jobId: number; // Job ID for the applied job
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export class UpdateJobApplicationDto {
  status?: string;
  applicationFormStatus?: string;
}
