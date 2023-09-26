// contact.entity.ts

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
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  relationship: string;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  phoneNumber: number;

  @ManyToOne(() => Nurse, (nurse) => nurse.contacts)
  nurse: Nurse;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
