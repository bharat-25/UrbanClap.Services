import mongoose, { Document, Schema } from "mongoose";

interface OfferAttributes {
  Offer_name: string;
  Offer_description: string;
  Offer_start_date: Date;
  Offer_end_date: Date;
}

interface OfferDocument extends Document, OfferAttributes {}

const OfferSchema = new Schema<OfferDocument>(
  {
    Offer_name: {
      type: String,
      required: true,
    },
    Offer_description: {
      type: String,
      required: true,
    },
    Offer_start_date: {
      type: Date,
      required: true,
    },
    Offer_end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "Offers",
  }
);

const OfferModel = mongoose.model<OfferDocument>("OfferModel", OfferSchema);

export default OfferModel;
