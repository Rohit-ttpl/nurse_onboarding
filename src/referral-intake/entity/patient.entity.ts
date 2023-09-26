import { Physician } from '../../physician/entity/physician.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Generated,
  ManyToOne,
} from 'typeorm';

@Entity('patient')
export class Patient {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Physician, (physician) => physician.patient, {
    onDelete: 'CASCADE',
  })
  physician: Physician;

  @Column({ nullable: true })
  physician_id: string;

  @Column()
  mrn: string;

  @Column()
  lastUsedMRN: string;

  @Generated('uuid')
  @Column({ default: null })
  uuid: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  maritalStatus: string;

  @Column({ nullable: true })
  raceorEthnicity: string;

  @Column({ nullable: true })
  electronicVisitVerification: number;

  @Column({ nullable: true })
  ssn: number;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  landlineNumber: string;

  @Column({ nullable: false, unique: true })
  phoneNumber: string;

  @Column({ nullable: true })
  deviceType: string;

  @Column({ nullable: true })
  interpreterName: string;

  @Column({ nullable: true })
  interpreterPhone: string;

  @Column({ nullable: true })
  contactDetailsId: string;

  @Column({ nullable: true })
  MedicalProgramType: number;

  @Column({ nullable: true, default: null })
  billing_addressId: string;

  @Column({ nullable: true, default: null })
  home_addressid: string;

  @Column({ nullable: false, default: null })
  payer_id: string;

  @Column({ nullable: true, default: null })
  claim_id: string;

  @Column({ nullable: false })
  eligibility_status: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  service_type: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: false })
  fax: string;

  @Column({ nullable: false })
  dayOfWeek: string;

  @Column({ nullable: false })
  openingTime: string;

  @Column({ nullable: false })
  closingTime: string;

  @Column({ nullable: false })
  locationId: string;

  @CreateDateColumn({ default: new Date().toISOString() })
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;
}
