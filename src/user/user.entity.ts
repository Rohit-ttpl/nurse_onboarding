import { JobApplication } from '../job-application/job-application.entity';
import { Nurse } from '../nurse-onboarding/nurse.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @Column()
  email?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  role?: string;

  @OneToMany(() => JobApplication, (jobApplication) => jobApplication.user)
  jobApplications: JobApplication[];

  @OneToOne(() => Nurse)
  @JoinColumn()
  nurse?: Nurse;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
