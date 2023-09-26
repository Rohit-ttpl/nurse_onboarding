// address.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Nurse } from './nurse.entity';

export enum AddressType {
  Billing = 'billing',
  Home = 'home',
  Common = 'common',
}

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address_line1: string;

  @Column()
  address_line2: string;

  @Column()
  landmark: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zip: number;

  @Column({ type: 'enum', enum: AddressType, nullable: true })
  type: AddressType;

  @ManyToOne(() => Nurse, (nurse) => nurse.addresses, { onDelete: 'CASCADE' })
  nurse: Nurse;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
