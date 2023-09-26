// job-application.entity.ts
import { Nurse } from '../nurse-onboarding/nurse.entity';
import { Job } from '../job/job.entity';
import { User } from '../user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.jobApplications)
  user: User;

  @ManyToOne(() => Job, (job) => job.jobApplications)
  job: Job;

  @OneToOne(() => Nurse)
  @JoinColumn()
  nurse?: Nurse;

  @Column()
  status: string;

  @Column()
  applicationFormStatus: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
