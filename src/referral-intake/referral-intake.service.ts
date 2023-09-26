import { Injectable } from '@nestjs/common';
import { PatientRepository } from './entity/patient.repo';
import { PhysicianService } from '../physician/physician.service';
import { PayerService } from '../payer/payer.service';

@Injectable()
export class ReferralIntakeService {
  constructor(
    private patientRepo: PatientRepository,
    private physicianService: PhysicianService,
    private payerService: PayerService,
  ) {}

  async addPatientDetialsService(patient: any) {
    try {
      let physician: any = {};
      let payer: any = {};

      console.log(
        '🚀 ~ file: referral-intake.service.ts:8 ~ ReferralIntakeService ~ addPatientDetialsService ~ patient:',
        patient,
      );
      if (!patient.physician) {
        throw new Error(`Please Provide Physician Details`);
      }
      if (
        patient.type === 'referral_intake' ||
        patient.type === 'physician_order'
      ) {
        physician = await this.physicianService.getPhysicianByNameService(
          patient.physician.firstName,
          patient.physician.lastName,
        );
        console.log(
          '🚀 ~ file: referral-intake.service.ts:26 ~ ReferralIntakeService ~ addPatientDetialsService ~ physician:',
          physician,
        );
        if (!physician) {
          console.log('no physician found, creating new record');
          physician = await this.physicianService.createPhysicianService(
            patient.physician,
          );
        }
      }
      patient.physician_id = physician.id;
      if (!patient.payer) {
        throw new Error(`Please Provide Payer's Details`);
      }
      if (patient.payer) {
        payer = await this.payerService.getPayerByNPIService(
          patient.payer.providerNPI,
        );
        console.log(
          '🚀 ~ file: referral-intake.service.ts:53 ~ ReferralIntakeService ~ addPatientDetialsService ~ payer:',
          payer,
        );
        if (!payer) {
          payer = await this.payerService.createPayerService(patient.payer);
        }
      }
      patient.payer_id = payer.id;
      return await this.patientRepo.createPatientRepo(patient);
    } catch (error: any) {
      console.log(
        '🚀 ~ file: referral-intake.service.ts:11 ~ ReferralIntakeService ~ addPatientDetialsService ~ error:',
        error,
      );
      throw error.message;
    }
  }

  async getAllReferaalIntakesService() {
    return await this.patientRepo.getAllReferaalIntakesRepo();
  }
}
