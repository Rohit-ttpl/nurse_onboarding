// nurse.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NurseDto, NurseResidenceDto } from './nurse.dto';
import { Nurse } from './nurse.entity';
import { NurseMapper } from './nurse.mapper';
import { Education } from './education.entity';
import { Employment } from './employment.entity';
import { JobApplication } from '../job-application/job-application.entity';
import { Certification } from './certification.entity';
import { Address } from './address.entity';
import { Contact } from './contact.entity';
import { Document } from '../document/entity/document.entity';

@Injectable()
export class NurseService {
  constructor(
    @InjectRepository(Nurse)
    private readonly nurseRepository: Repository<Nurse>,
    @InjectRepository(Education)
    private readonly educationRepository: Repository<Education>,
    @InjectRepository(Employment)
    private readonly employmentRepository: Repository<Employment>,
    // @InjectRepository(Employment)
    // private readonly certificationRepository: Repository<Employment>,
    @InjectRepository(JobApplication)
    private readonly jobApplicationRepository: Repository<JobApplication>,
    @InjectRepository(Certification)
    private readonly certificationRepository: Repository<Certification>,
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,

    private readonly nurseMapper: NurseMapper,
  ) {}

  // async onboard(dto: NurseDto): Promise<Nurse> {
  //   // Map the DTO to a Nurse entity
  //   console.log('onboard 1');
  //   const nurse = this.nurseMapper.toEntity(dto);
  //   console.log('onboard 2');
  //   const savedNurse = await this.nurseRepository.save(nurse);
  //   console.log('onboard 22', savedNurse);

  //   // // Create and save education records
  //   const educationEntities = dto.educations.map((edu) => {
  //     const education = new Education();
  //     education.type = edu.type;
  //     education.instituteName = edu.instituteName;
  //     education.addressId = edu.addressId;
  //     education.yearAttended = edu.yearAttended;
  //     education.isCompleted = edu.isCompleted;
  //     education.stream = edu.stream;
  //     education.yearofPassout = edu.yearofPassout;
  //     education.nurse = savedNurse;
  //     return education;
  //   });
  //   console.log('onboard 3', educationEntities);

  //   const savedEducations =
  //     await this.educationRepository.save(educationEntities);
  //   console.log('onboard 4', savedEducations);

  //   // Create and save employment records
  //   const employmentEntities = dto.employments.map((empl) => {
  //     const employment = new Employment();
  //     employment.Employername = empl.Employername;
  //     employment.startDate = empl.startDate;
  //     employment.endDate = empl.endDate;
  //     employment.jobTitle = empl.jobTitle;
  //     employment.phoneNumber = empl.phoneNumber;
  //     employment.startingSalary = empl.startingSalary;
  //     employment.endingSalary = empl.endingSalary;
  //     employment.responsibilities = empl.responsibilities;
  //     employment.canContactEmployeer = empl.canContactEmployeer;
  //     employment.referenceverifiedBy = empl.referenceverifiedBy;
  //     employment.nurse = savedNurse;
  //     return employment;
  //   });
  //   const savedEmployments =
  //     await this.employmentRepository.save(employmentEntities);
  //   console.log(savedEmployments);
  //   return savedNurse;
  // }

  // version two
  // async onboard(dto: NurseDto): Promise<Nurse> {
  //   const jobApplication = await this.jobApplicationRepository.findOne({
  //     where: { id: 1 },
  //     relations: ['nurse'],
  //   });
  //   if (!jobApplication) {
  //     throw new NotFoundException(`Job Application with ID ${1} not found`);
  //   }

  //   console.log('jobApplication =====>', jobApplication.nurse?.id);

  //   const nurseId: number | undefined = jobApplication.nurse?.id;

  //   if (!nurseId) {
  //     throw new NotFoundException('Nurse ID not found in the job application');
  //   }

  //   // Update the nurse-related values
  //   const nurse: Nurse | null = await this.nurseRepository.findOne({
  //     where: { id: 1 },
  //   });

  //   if (!nurse) {
  //     throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
  //   }
  //   console.log('nurseId available===>', nurse);
  //   // console.log('nurseId===>', dto);

  //   const updatedNurse = this.nurseRepository.create({
  //     ...nurse,
  //     ...dto,
  //   });

  //   console.log('updatedNurse available===>', updatedNurse);
  //   await this.nurseRepository.save(updatedNurse);

  //   // return updatedNurse;

  //   // // // Create and save education records
  //   const educationEntities = dto.educations.map((edu) => {
  //     const education = new Education();
  //     education.type = edu.type;
  //     education.instituteName = edu.instituteName;
  //     education.addressId = edu.addressId;
  //     education.yearAttended = edu.yearAttended;
  //     education.isCompleted = edu.isCompleted;
  //     education.stream = edu.stream;
  //     education.yearofPassout = edu.yearofPassout;
  //     education.nurse = updatedNurse;
  //     return education;
  //   });
  //   console.log('onboard 3', educationEntities);

  //   const savedEducations =
  //     await this.educationRepository.save(educationEntities);
  //   console.log('onboard 4', savedEducations);

  //   // // Create and save employment records
  //   const employmentEntities = dto.employments.map((empl) => {
  //     const employment = new Employment();
  //     employment.Employername = empl.Employername;
  //     employment.startDate = empl.startDate;
  //     employment.endDate = empl.endDate;
  //     employment.jobTitle = empl.jobTitle;
  //     employment.phoneNumber = empl.phoneNumber;
  //     employment.startingSalary = empl.startingSalary;
  //     employment.endingSalary = empl.endingSalary;
  //     employment.responsibilities = empl.responsibilities;
  //     employment.canContactEmployeer = empl.canContactEmployeer;
  //     employment.referenceverifiedBy = empl.referenceverifiedBy;
  //     employment.nurse = updatedNurse;
  //     return employment;
  //   });
  //   const savedEmployments =
  //     await this.employmentRepository.save(employmentEntities);
  //   console.log(savedEmployments);

  //   // Create and save certifications
  //   const certificationEntities = dto.certifications.map((cert) => {
  //     const certification = new Certification();
  //     certification.type = cert.type;
  //     certification.stateIssued = cert.stateIssued;
  //     certification.dateIssued = cert.dateIssued;
  //     certification.expiryDate = cert.expiryDate;
  //     certification.nurse = updatedNurse;
  //     return certification;
  //   });

  //   this.certificationRepository.save(certificationEntities);

  //   // Create and save addresses
  //   const addressEntities = dto.addresses.map((addr) => {
  //     const address = new Address();
  //     address.address_line1 = addr.address_line1;
  //     address.address_line2 = addr.address_line2;
  //     address.landmark = addr.landmark;
  //     address.city = addr.city;
  //     address.state = addr.state;
  //     address.country = addr.country;
  //     address.zip = addr.zip;
  //     // address.type = addr.type as AddressType; // Cast to AddressType enum
  //     address.nurse = updatedNurse;
  //     return address;
  //   });

  //   await this.addressRepository.save(addressEntities);

  //   console.log('before contact');
  //   // Create and save contacts/ references
  //   const contactEntities = dto.contacts.map((cont) => {
  //     const contact = new Contact();
  //     contact.type = cont.type;
  //     contact.name = cont.name;
  //     contact.relationship = cont.relationship;
  //     contact.title = cont.title;
  //     contact.company = cont.company;
  //     contact.phoneNumber = cont.phoneNumber;
  //     contact.nurse = updatedNurse;
  //     return contact;
  //   });
  //   console.log('before contact 1111');

  //   await this.contactRepository.save(contactEntities);

  //   // Create and save documents
  //   const documentEntities = dto.documents.map((doc) => {
  //     const document = new Document();
  //     document.s3_url = doc.s3_url;
  //     document.document_type = doc.document_type;
  //     document.nurse = updatedNurse;
  //     return document;
  //   });

  //   await this.documentRepository.save(documentEntities);
  //   console.log('Document Data saved');

  //   return updatedNurse;
  // }

  async onboard(dto: NurseDto): Promise<Nurse> {
    const jobApplication = await this.jobApplicationRepository.findOne({
      where: { id: 1 },
      relations: ['nurse'],
    });
    if (!jobApplication) {
      throw new NotFoundException(`Job Application with ID ${1} not found`);
    }

    console.log('jobApplication =====>', jobApplication.nurse?.id);

    const nurseId: number | undefined = jobApplication.nurse?.id;

    if (!nurseId) {
      throw new NotFoundException('Nurse ID not found in the job application');
    }

    // Update the nurse-related values
    const nurse: Nurse | null = await this.nurseRepository.findOne({
      where: { id: 1 },
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }
    console.log('nurseId available===>', nurse);
    // console.log('nurseId===>', dto);

    const updatedNurse = this.nurseRepository.create({
      ...nurse,
      ...dto,
    });

    console.log('updatedNurse available===>', updatedNurse);
    await this.nurseRepository.save(updatedNurse);

    // Create and save education records
    const educationEntities = dto.educations.map((edu) => {
      const education = new Education();
      education.type = edu.type;
      education.instituteName = edu.instituteName;
      education.addressId = edu.addressId;
      education.yearAttended = edu.yearAttended;
      education.isCompleted = edu.isCompleted;
      education.stream = edu.stream;
      education.yearofPassout = edu.yearofPassout;
      education.nurse = updatedNurse;
      return education;
    });
    console.log('onboard 3', educationEntities);

    const savedEducations =
      await this.educationRepository.save(educationEntities);
    console.log('onboard 4', savedEducations);

    // // Create and save employment records
    const employmentEntities = dto.employments.map((empl) => {
      const employment = new Employment();
      employment.Employername = empl.Employername;
      employment.startDate = empl.startDate;
      employment.endDate = empl.endDate;
      employment.jobTitle = empl.jobTitle;
      employment.phoneNumber = empl.phoneNumber;
      employment.startingSalary = empl.startingSalary;
      employment.endingSalary = empl.endingSalary;
      employment.responsibilities = empl.responsibilities;
      employment.canContactEmployeer = empl.canContactEmployeer;
      employment.referenceverifiedBy = empl.referenceverifiedBy;
      employment.nurse = updatedNurse;
      return employment;
    });
    const savedEmployments =
      await this.employmentRepository.save(employmentEntities);
    console.log(savedEmployments);

    // Create and save certifications
    const certificationEntities = dto.certifications.map((cert) => {
      const certification = new Certification();
      certification.type = cert.type;
      certification.stateIssued = cert.stateIssued;
      certification.dateIssued = cert.dateIssued;
      certification.expiryDate = cert.expiryDate;
      certification.nurse = updatedNurse;
      return certification;
    });

    this.certificationRepository.save(certificationEntities);

    // Create and save addresses
    const addressEntities = dto.addresses.map((addr) => {
      const address = new Address();
      address.address_line1 = addr.address_line1;
      address.address_line2 = addr.address_line2;
      address.landmark = addr.landmark;
      address.city = addr.city;
      address.state = addr.state;
      address.country = addr.country;
      address.zip = addr.zip;
      // address.type = addr.type as AddressType; // Cast to AddressType enum
      address.nurse = updatedNurse;
      return address;
    });

    await this.addressRepository.save(addressEntities);

    console.log('before contact');
    // Create and save contacts/ references
    const contactEntities = dto.contacts.map((cont) => {
      const contact = new Contact();
      contact.type = cont.type;
      contact.name = cont.name;
      contact.relationship = cont.relationship;
      contact.title = cont.title;
      contact.company = cont.company;
      contact.phoneNumber = cont.phoneNumber;
      contact.nurse = updatedNurse;
      return contact;
    });
    console.log('before contact 1111');

    await this.contactRepository.save(contactEntities);

    // Create and save documents
    const documentEntities = dto.documents.map((doc) => {
      const document = new Document();
      document.s3_url = doc.s3_url;
      document.document_type = doc.document_type;
      document.nurse = updatedNurse;
      return document;
    });

    await this.documentRepository.save(documentEntities);
    console.log('Document Data saved');

    return updatedNurse;
  }

  async onboard1(dto: NurseDto): Promise<Nurse> {
    // Check if the job application and nurse exist
    try {
      const jobApplication = await this.jobApplicationRepository.findOneOrFail({
        where: { id: 1 },
        relations: ['nurse'],
      });
      const nurseId = jobApplication.nurse?.id;

      if (!nurseId) {
        throw new NotFoundException(
          'Nurse ID not found in the job application',
        );
      }

      const nurse = await this.nurseRepository.findOneOrFail({
        where: { id: nurseId },
      });

      // Update nurse details
      const updatedNurse = this.nurseRepository.merge(nurse, dto);
      await this.nurseRepository.save(updatedNurse);

      // Create and save education records
      if (dto.educations && dto.educations.length > 0) {
        const educationEntities = dto.educations.map((edu) =>
          this.educationRepository.create({ ...edu, nurse: updatedNurse }),
        );
        await this.educationRepository.save(educationEntities);
      }

      // Create and save employment records
      if (dto.employments && dto.employments.length > 0) {
        const employmentEntities = dto.employments.map((empl) =>
          this.employmentRepository.create({ ...empl, nurse: updatedNurse }),
        );
        await this.employmentRepository.save(employmentEntities);
      }

      // Create and save certifications
      if (dto.certifications && dto.certifications.length > 0) {
        const certificationEntities = dto.certifications.map((cert) =>
          this.certificationRepository.create({ ...cert, nurse: updatedNurse }),
        );
        await this.certificationRepository.save(certificationEntities);
      }

      // Create and save addresses
      if (dto.addresses && dto.addresses.length > 0) {
        const addressEntities = dto.addresses.map((addr) =>
          this.addressRepository.create({ ...addr, nurse: updatedNurse }),
        );
        await this.addressRepository.save(addressEntities);
      }

      // Create and save contacts/references
      if (dto.contacts && dto.contacts.length > 0) {
        const contactEntities = dto.contacts.map((cont) =>
          this.contactRepository.create({ ...cont, nurse: updatedNurse }),
        );
        await this.contactRepository.save(contactEntities);
      }

      // Create and save documents
      if (dto.documents && dto.documents.length > 0) {
        const documentEntities = dto.documents.map((doc) =>
          this.documentRepository.create({ ...doc, nurse: updatedNurse }),
        );
        await this.documentRepository.save(documentEntities);
      }
      console.log('Nurse onboarded ===================>');
      return updatedNurse;
    } catch (error) {
      // Handle and log the error
      console.error('Error while onboarding nurse:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  async getAllNurses(): Promise<Nurse[]> {
    const nurses = await this.nurseRepository.find({
      relations: ['educations', 'employments'], // Include education and employment records
    });
    return nurses;
  }

  async getNurseById(id: number): Promise<Nurse | undefined> {
    const nurse = await this.nurseRepository.findOne({
      where: { id },
      relations: ['educations', 'employments'], // Include education and employment records
    });

    if (!nurse) {
      throw new NotFoundException('Nurse not found');
    }

    return nurse;
  }

  async updateNurseById(id: number, dto: NurseDto): Promise<Nurse | undefined> {
    const nurse = await this.nurseRepository.findOne({
      where: { id },
      relations: ['educations', 'employments'],
    });

    if (!nurse) {
      throw new NotFoundException('Nurse not found');
    }

    // Create a new instance of Nurse and merge DTO data
    const updatedNurse = this.nurseRepository.create({
      ...nurse,
      ...dto,
    });

    Object.assign(nurse, NurseDto);
    // Update education records if provided
    // if (dto.educations) {
    //   updatedNurse.educations = dto.educations;
    // }

    // // Update employment records if provided
    // if (dto.employments) {
    //   updatedNurse.employments = dto.employments;
    // }

    // Save the updated nurse entity to the database
    await this.nurseRepository.save(updatedNurse);

    return updatedNurse;
  }

  async deleteNurseById(id: number): Promise<void> {
    const nurse = await this.nurseRepository.findOne({
      where: { id },
    });

    if (!nurse) {
      throw new NotFoundException('Nurse not found');
    }

    await this.nurseRepository.remove(nurse);
  }

  async updateEducation(
    id: number,
    education: Education,
  ): Promise<Nurse | undefined> {
    const nurse = await this.nurseRepository.findOne({
      where: { id },
      relations: ['educations', 'employments'],
    });

    if (!nurse) {
      throw new NotFoundException('Nurse not found');
    }

    // Find the education record to update (e.g., by ID or other unique identifier)
    const updatedEducation = nurse.educations.find(
      (e) => e.id === education.id,
    );

    if (!updatedEducation) {
      throw new NotFoundException('Education record not found');
    }

    // Update the education record with the new data
    Object.assign(updatedEducation, education);

    // Save the updated nurse entity to the database
    await this.nurseRepository.save(nurse);

    return nurse;
  }

  async UpdateNurseResidence(
    dto: NurseResidenceDto,
    nurseId: number,
  ): Promise<Nurse> {
    const nurse: Nurse | null = await this.nurseRepository.findOne({
      where: { id: 1 },
    });

    if (!nurse) {
      throw new NotFoundException(`Nurse with ID ${nurseId} not found`);
    }

    const updatedNurse = this.nurseRepository.create({
      ...nurse,
      ...dto,
    });

    await this.nurseRepository.save(updatedNurse);
    return updatedNurse;
  }
}
