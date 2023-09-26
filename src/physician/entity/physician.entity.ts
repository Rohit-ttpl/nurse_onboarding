import { Patient } from '../../referral-intake/entity/patient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('physician')
export class Physician {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => Patient, (patient) => patient.physician)
  patient: Patient[];

  @Column()
  NPI: string;

  @Column()
  UPINorLIC: string;

  @Column()
  FedTaxId: string;

  @Column()
  title: string;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  AddressType: string;

  @Column()
  Status: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
