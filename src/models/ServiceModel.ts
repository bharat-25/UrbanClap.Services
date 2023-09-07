import mongoose, { Schema } from "mongoose";
// import {documentsToInsert} from '../servicesdata/homeData';

interface ICategory extends Document {
  name: string;
  description: string;
  category_id: number;
parent_id:[number];
}

const categorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category_id: { type: Number, required: true },
  parent_id: { type:[Number], default: null },
},{});

const ServiceModel= mongoose.model<ICategory>("Services", categorySchema);


export {ServiceModel}