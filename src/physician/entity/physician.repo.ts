import { InjectRepository } from '@nestjs/typeorm';
import { Physician } from './physician.entity';
import { Repository } from 'typeorm';

export class PhysicianRepo {
  constructor(
    @InjectRepository(Physician)
    private physicianRepo: Repository<Physician>,
  ) {}

  async createPhysicianRepo(physician: any) {
    return await this.physicianRepo.save(physician);
  }

  async getPhysicianByParamsRepo(npi: string) {
    return await this.physicianRepo.findOne({
      where: {
        NPI: npi,
      },
    });
  }

  async getPhysicianByNameRepo(firstName: string, lastName: string) {
    return await this.physicianRepo.findOne({
      where: {
        FirstName: firstName,
        LastName: lastName,
      },
    });
  }
}
