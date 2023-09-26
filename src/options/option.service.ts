// option.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './option.entity';
import { CreateOptionDto } from './option.dto';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepository: Repository<Option>,
  ) {}

  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    const option = this.optionRepository.create(createOptionDto);
    return await this.optionRepository.save(option);
  }

  async getAllOptions(): Promise<Option[]> {
    return await this.optionRepository.find();
  }

  async getOptionById(optionId: number): Promise<Option> {
    const option = await this.optionRepository.findOne({
      where: { id: optionId },
    });
    if (!option) {
      throw new NotFoundException(`Option with ID ${optionId} not found`);
    }
    return option;
  }

  async updateOption(
    optionId: number,
    updateData: CreateOptionDto,
  ): Promise<Option> {
    await this.getOptionById(optionId);
    await this.optionRepository.update(optionId, updateData);
    return this.getOptionById(optionId);
  }

  async deleteOption(optionId: number): Promise<void> {
    await this.getOptionById(optionId);
    await this.optionRepository.delete(optionId);
  }
}
