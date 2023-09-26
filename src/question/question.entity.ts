// question.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Assessment } from '../assessment/assessment.entity';
import { Option } from '../options/option.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Assessment, (assessment) => assessment.questions)
  assessment: Assessment;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
