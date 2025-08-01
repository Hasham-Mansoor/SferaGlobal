import { Module } from '@nestjs/common';
import { FormsModule } from './contactForm/contactForm.module';
import {ConfigModule} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoUri!),
    FormsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
