// nurse.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Education } from './education.entity';
import { Employment } from './employment.entity';
import { Certification } from './certification.entity';
import { Contact } from './contact.entity';
import { Address } from './address.entity';
import { Document } from '../document/entity/document.entity';

@Entity()
export class Nurse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  Telephone: string;

  @Column({ nullable: true })
  ssn: number;

  @Column({ nullable: true })
  dob: Date;

  @Column({ default: true })
  isLegalToWork: boolean;

  @Column({ default: true })
  usCitizen: boolean;

  @Column({ default: false })
  authorizedToWorkInUSA: boolean;

  @Column({ nullable: true })
  alienNumber: number;

  @Column({ nullable: true })
  workType: string;

  @Column({ default: false })
  isNurseSkilled: boolean;

  @Column({ nullable: true })
  onboardingStatus: string;

  @Column({ nullable: true })
  lastExaminationDate: Date;

  @Column({ default: false })
  healthLimitation: boolean;

  @Column({ nullable: true })
  healthLimitationReason: string;

  @Column({ default: false })
  convictedCrime: boolean;

  @Column({ nullable: true })
  howHearAboutCompany: string;

  @Column({ nullable: true })
  referredByName: string;

  @Column({ nullable: true })
  digitalSignature: string;

  @Column({ nullable: true })
  applicationFormStep: string;

  @Column({ nullable: true })
  StateResidence: string;

  @Column({ nullable: true })
  residenceYears: number;

  @OneToMany(() => Education, (education) => education.nurse)
  educations: Education[];

  @OneToMany(() => Employment, (employment) => employment.nurse)
  employments: Employment[];

  @OneToMany(() => Certification, (certification) => certification.nurse)
  certifications?: Certification[];

  @OneToMany(() => Document, (document) => document.nurse)
  documents?: Document[];

  @OneToMany(() => Contact, (contact) => contact.nurse)
  contacts?: Contact[];

  @OneToMany(() => Address, (address) => address.nurse)
  addresses?: Address[];
}
