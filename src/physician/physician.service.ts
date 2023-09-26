import { Injectable } from '@nestjs/common';
import { PhysicianRepo } from './entity/physician.repo';

@Injectable()
export class PhysicianService {
  constructor(private physicianRepo: PhysicianRepo) {}

  async getPhysicianByParamsService(npi: string) {
    try {
      console.log(
        '🚀 ~ file: physician.service.ts:9 ~ PhysicianService ~ getPhysicianByParamsService ~ npi:',
        npi,
      );
      return await this.physicianRepo.getPhysicianByParamsRepo(npi);
    } catch (error) {
      console.log(
        '🚀 ~ file: physician.service.ts:12 ~ PhysicianService ~ getPhysicianByParamsService ~ error:',
        error,
      );
      throw error.message;
    }
  }

  async getPhysicianByNameService(firstName: string, lastName: string) {
    return await this.physicianRepo.getPhysicianByNameRepo(firstName, lastName);
  }

  async createPhysicianService(physician: any) {
    try {
      console.log(
        '🚀 ~ file: physician.service.ts:29 ~ PhysicianService ~ createPhysicianService ~ physician:',
        physician,
      );
      return await this.physicianRepo.createPhysicianRepo(physician);
    } catch (error) {
      console.log(
        '🚀 ~ file: physician.service.ts:32 ~ PhysicianService ~ createPhysicianService ~ error:',
        error,
      );
      throw error.message;
    }
  }
}
