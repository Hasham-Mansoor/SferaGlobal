import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsController } from './contactForm.controller';
import { FormsService } from './conatctForm.service';
import {
 ContactSchema
} from './modal/contactForm.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ConatctForm', schema: ContactSchema },
    ]),
  ],
  controllers: [FormsController],
  providers: [FormsService],
})
export class FormsModule {}
