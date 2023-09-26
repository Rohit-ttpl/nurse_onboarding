// option.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateOptionDto } from './option.dto';
import { Option } from './option.entity';
import { OptionService } from './option.service';

@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) {}

  @Post()
  create(@Body() createOptionDto: CreateOptionDto): Promise<Option> {
    return this.optionService.createOption(createOptionDto);
  }

  @Get()
  findAll(): Promise<Option[]> {
    return this.optionService.getAllOptions();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Option> {
    return this.optionService.getOptionById(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOptionDto: CreateOptionDto,
  ): Promise<Option> {
    return this.optionService.updateOption(Number(id), updateOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.optionService.deleteOption(Number(id));
  }
}
