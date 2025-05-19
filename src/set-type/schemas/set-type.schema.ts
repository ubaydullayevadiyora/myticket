import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeatTypeDocument = HydratedDocument<SeatType>;

@Schema({ timestamps: true })
export class SeatType {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const SeatTypeSchema = SchemaFactory.createForClass(SeatType);
