import { Nurse } from '../../nurse-onboarding/nurse.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  // ManyToOne,
} from 'typeorm';
// import { Nurse } from '../../job/entity/nurse.entity';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  s3_url: string;

  @Column()
  document_type: string;

  @ManyToOne(() => Nurse, (nurse) => nurse.documents)
  nurse: Nurse;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
