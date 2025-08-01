import * as mongoose from 'mongoose';
export const  ContactSchema= new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject:{ type: String,required: true},
  message: { type: String },
});


export interface FormEntry {
   name: string,
      email: string,
      phone: string,
      subject: string,
      message: string,
   }
  
