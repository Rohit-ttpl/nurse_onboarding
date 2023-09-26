// nurse.mapper.ts
import { Injectable } from '@nestjs/common';
import { NurseDto } from './nurse.dto';
import { Nurse } from './nurse.entity';
import { Education } from './education.entity';
import { Employment } from './employment.entity';
import { Certification } from './certification.entity';

@Injectable()
export class NurseMapper {
  toEntity(dto: NurseDto): Nurse {
    const nurse = new Nurse();
    nurse.first_name = dto.first_name;
    nurse.middle_name = dto.middle_name;
    nurse.last_name = dto.last_name;
    nurse.username = dto.username;
    nurse.email = dto.email;
    nurse.password = dto.password;
    nurse.Telephone = dto.Telephone;
    nurse.ssn = dto.ssn;
    nurse.dob = dto.dob;
    nurse.isLegalToWork = dto.isLegalToWork;
    nurse.usCitizen = dto.usCitizen;
    nurse.authorizedToWorkInUSA = dto.authorizedToWorkInUSA;
    nurse.alienNumber = dto.alienNumber;
    nurse.workType = dto.workType;
    nurse.isNurseSkilled = dto.isNurseSkilled;
    nurse.onboardingStatus = dto.onboardingStatus;
    nurse.lastExaminationDate = dto.lastExaminationDate;
    nurse.healthLimitation = dto.healthLimitation;
    nurse.healthLimitationReason = dto.healthLimitationReason;
    nurse.convictedCrime = dto.convictedCrime;
    nurse.howHearAboutCompany = dto.howHearAboutCompany;
    nurse.referredByName = dto.referredByName;
    nurse.digitalSignature = dto.digitalSignature;

    // Map educations
    nurse.educations = dto.educations.map((edu) => {
      const education = new Education();
      education.type = edu.type;
      education.instituteName = edu.instituteName;
      education.addressId = edu.addressId;
      education.yearAttended = edu.yearAttended;
      education.isCompleted = edu.isCompleted;
      education.stream = edu.stream;
      education.yearofPassout = edu.yearofPassout;
      // You can add the nurse reference here
      return education;
    });

    // Map employments
    nurse.employments = dto.employments.map((empl) => {
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
      // You can add the nurse reference here
      return employment;
    });

    // Map certifications
    nurse.certifications = dto.certifications.map((cert) => {
      const certification = new Certification();
      certification.type = cert.type;
      certification.stateIssued = cert.stateIssued;
      certification.dateIssued = cert.dateIssued;
      certification.expiryDate = cert.expiryDate;
      return certification;
    });

    return nurse;
  }
}
