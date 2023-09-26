// education.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Nurse } from './nurse.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  instituteName: string;

  @Column()
  addressId: string;

  @Column()
  yearAttended: number;

  @Column()
  isCompleted: boolean;

  @Column()
  stream: string;

  @Column()
  yearofPassout: number;

  @ManyToOne(() => Nurse, (nurse) => nurse.educations)
  nurse: Nurse;
}
