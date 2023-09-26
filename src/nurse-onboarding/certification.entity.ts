// certification.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Nurse } from './nurse.entity';

@Entity()
export class Certification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  stateIssued: string;

  @Column()
  dateIssued: Date;

  @Column()
  expiryDate: Date;

  @ManyToOne(() => Nurse, (nurse) => nurse.certifications)
  nurse: Nurse;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
