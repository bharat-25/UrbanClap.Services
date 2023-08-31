import mongoose, { Schema } from "mongoose";

interface IPackage extends Document {
  name: string;
  description: string;
  category_id: number;
  price: number;
  parent_id: [number];
}

const PackageSchema = new Schema<IPackage>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category_id: { type: Number, required: true },
  price: { type: Number, required: true },
  parent_id: { type: [Number], ref: "Services", required: true, default: null },
});

const PackageModel = mongoose.model<IPackage>("Packages", PackageSchema);

export { PackageModel };
