// assessment.entity.ts
import { Question } from '../question/question.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Question, (question) => question.assessment)
  questions: Question[];
}
