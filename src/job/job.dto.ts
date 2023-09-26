export class CreateJobDto {
  title: string;
  description: string;
  status: string;
}

export class UpdateJobDto {
  title?: string;
  description?: string;
  status?: string;
}
