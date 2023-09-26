// employment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Nurse } from './nurse.entity';

@Entity()
export class Employment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Employername: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  jobTitle: string;

  @Column()
  phoneNumber: number;

  @Column()
  startingSalary: number;

  @Column()
  endingSalary: number;

  @Column()
  responsibilities: string;

  @Column()
  canContactEmployeer: boolean;

  @Column()
  referenceverifiedBy: string;

  @ManyToOne(() => Nurse, (nurse) => nurse.employments)
  nurse: Nurse;
}
