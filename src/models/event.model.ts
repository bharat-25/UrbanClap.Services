import mongoose, { Document, Schema } from "mongoose";

interface EventAttributes {
  Event_name: string;
  Event_description: string;
  Event_start_date: Date;
  Event_end_date: Date;
}

interface EventDocument extends Document, EventAttributes {}

const EventSchema = new Schema<EventDocument>(
  {
    Event_name: {
      type: String,
      required: true,
    },
    Event_description: {
      type: String,
      required: true,
    },
    Event_start_date: {
      type: Date,
      required: true,
    },
    Event_end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "eventable",
  }
);

const EventModel = mongoose.model<EventDocument>("EventModel", EventSchema);

export default EventModel;
