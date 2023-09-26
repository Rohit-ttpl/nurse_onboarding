// nurse.dto.ts
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsBoolean,
  ValidateNested,
} from 'class-validator';

class EducationDto {
  @IsString()
  type: string;

  @IsString()
  instituteName: string;

  @IsString()
  addressId: string;

  @IsNumber()
  yearAttended: number;

  @IsBoolean()
  isCompleted: boolean;

  @IsString()
  stream: string;

  @IsNumber()
  yearofPassout: number;
}

class EmploymentDto {
  @IsString()
  Employername: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;

  @IsString()
  jobTitle: string;

  @IsNumber()
  phoneNumber: number;

  @IsNumber()
  startingSalary: number;

  @IsNumber()
  endingSalary: number;

  @IsString()
  responsibilities: string;

  @IsBoolean()
  canContactEmployeer: boolean;

  @IsString()
  referenceverifiedBy: string;
}

class AddressDto {
  @IsString()
  address_line1: string;

  @IsString()
  address_line2: string;

  @IsString()
  landmark: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsNumber()
  zip: number;

  // @IsString()
  // type: string; // Adjust the type field based on your needs
}

class ContactDto {
  @IsString()
  type: string;

  @IsString()
  name: string;

  @IsString()
  relationship: string;

  @IsString()
  title: string;

  @IsString()
  company: string;

  @IsNumber()
  phoneNumber: number;
}

class CertificationDto {
  @IsString()
  type: string;

  @IsString()
  stateIssued: string;

  @IsDate()
  dateIssued: Date;

  @IsDate()
  expiryDate: Date;
}

class DocumentDto {
  @IsString()
  s3_url: string;

  @IsString()
  document_type: string;
}

export class NurseDto {
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  middle_name: string;

  @IsString()
  last_name: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  Telephone: string;

  @IsOptional()
  @IsString()
  applicationFormStep: string;

  @IsOptional()
  @IsNumber()
  ssn: number;

  @IsDate()
  dob: Date;

  @IsBoolean()
  isLegalToWork: boolean;

  @IsBoolean()
  usCitizen: boolean;

  @IsBoolean()
  authorizedToWorkInUSA: boolean;

  @IsNumber()
  alienNumber: number;

  @IsOptional()
  @IsString()
  workType: string;

  @IsBoolean()
  isNurseSkilled: boolean;

  @IsOptional()
  @IsString()
  onboardingStatus: string;

  @IsDate()
  lastExaminationDate: Date;

  @IsBoolean()
  healthLimitation: boolean;

  @IsOptional()
  @IsString()
  healthLimitationReason: string;

  @IsBoolean()
  convictedCrime: boolean;

  @IsString()
  howHearAboutCompany: string;

  @IsOptional()
  @IsString()
  referredByName: string;

  @IsString()
  digitalSignature: string;

  @ValidateNested({ each: true })
  educations: EducationDto[];

  @ValidateNested({ each: true })
  employments: EmploymentDto[];

  @ValidateNested({ each: true })
  certifications: CertificationDto[];

  @ValidateNested({ each: true })
  contacts: ContactDto[];

  @ValidateNested({ each: true })
  addresses: AddressDto[];

  @ValidateNested({ each: true })
  documents: DocumentDto[];
}

export class NurseResidenceDto {
  @IsString()
  StateResidence: string;

  @IsNumber()
  residenceYears: number;

  @IsOptional()
  @IsString()
  applicationFormStep: string;
}
