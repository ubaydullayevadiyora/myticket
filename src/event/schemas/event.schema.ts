import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import mongoose from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop()
  photo?: string;

  @Prop()
  start_date?: Date;

  @Prop()
  start_time?: string;

  @Prop()
  finish_date?: Date;

  @Prop()
  finish_time?: string;

  @Prop()
  info?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "EventType" })
  event_type_id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "HumanCategory" })
  human_category_id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venue_id: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Lang" })
  lang_id: mongoose.Types.ObjectId;

  @Prop()
  release_date?: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
