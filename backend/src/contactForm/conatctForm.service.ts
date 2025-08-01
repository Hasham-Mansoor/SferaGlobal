import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormEntry } from './modal/contactForm.model';
const sgMail = require('@sendgrid/mail');




@Injectable()
export class FormsService {
  constructor(
    @InjectModel('ConatctForm') private readonly conatctForm: Model<FormEntry>,

  ) { 
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
     // Replace with your SendGrid API key
    }

  async create( data: FormEntry): Promise<FormEntry> {
   
    const newEntry = new this.conatctForm(data);
    this.sendEmailToOwner(newEntry);
    return newEntry.save();
  }
  private async sendEmailToOwner( formData: FormEntry): Promise<void> {
    try {
      const msg = {
        to: 'hasham.sferaglobal@gmail.com', // Replace with the owner's email
        from: 'hasham.sferaglobal@gmail.com', // Replace with your verified SendGrid email
        subject: `For Inquiry ${JSON.stringify(formData.subject, null, 2)}`,
        text: `You got a new message from your website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        html: `<h1>New Form Submission</h1>
               <pre>You got a new message from your website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}</pre>`,
      };

      await sgMail.send(msg); // Use named import instead of sgMail.send(msg);

    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  
  // Other methods remain unchanged...

  async findAll(): Promise<FormEntry[]> {
   
    const filter: any = {}; 
    return await this.conatctForm.find(filter).sort({ dateSubmitted: -1 }).exec();
}



  async findOne(id: string): Promise<FormEntry | null> {
  return await this.conatctForm.findById(id).exec();
}
async delete(id: string): Promise<FormEntry | null> {
  return await this.conatctForm.findByIdAndDelete(id).exec();
}

  async update( id: string,update): Promise<FormEntry> {
    
  
  const {called,note,done}=update
    try {
      const record = await this.conatctForm.findById(id); // Fetch the record by ID
      if (!record) {
        throw new Error('Record not found');
      }
  
      // Update the `called` field to true
     
      return record;
    } catch (error) {
  
      throw new Error('Failed to update the called status');
    }
  }
  
  
}
