import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';

export class PatientRepository {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  async createPatientRepo(patient: any) {
    console.log(
      '🚀 ~ file: patient.repo.ts:12 ~ PatientRepository ~ createPatientRepo ~ patient:',
      patient,
    );
    return await this.patientRepo.save(patient);
  }

  async getAllReferaalIntakesRepo() {
    return await this.patientRepo.find({
      where: {
        type: 'referral_intake',
      },
    });
  }
}
