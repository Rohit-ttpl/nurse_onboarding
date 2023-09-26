import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('payer')
export class Payer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, unique: true })
  providerNPI: string;

  @Column({ nullable: false, unique: true })
  payerName: string;

  @Column({ nullable: false, unique: true })
  agencyName: string;

  @Column({ nullable: false })
  beginDate: Date;

  @Column({ nullable: false })
  endDate: Date;

  @Column({ nullable: false })
  createdBy: string;

  @Column({ nullable: false })
  modifiedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
