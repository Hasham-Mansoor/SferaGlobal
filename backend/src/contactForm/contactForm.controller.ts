import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FormsService } from './conatctForm.service';
import type { FormEntry } from './modal/contactForm.model';

@Controller('contactform')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Post()
  async create(
    @Body() data: FormEntry,
  ): Promise<FormEntry> {
    return this.formsService.create( data);
  }

  @Get()
  async findAll(): Promise<FormEntry[]> {
    return this.formsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<FormEntry | null> {
    return this.formsService.findOne( id);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<FormEntry | null> {
    return this.formsService.delete( id);
  }

  @Post(':id')
  async called(
    @Param('id') id: string,
    @Body() update,
  ): Promise<FormEntry> {
    return this.formsService.update( id,update);
  }
}
