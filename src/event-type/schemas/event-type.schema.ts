import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import mongoose from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema()
export class EventType {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventType",
    default: null,
  })
  parent_event_type_id?: mongoose.Types.ObjectId;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
