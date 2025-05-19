import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type SeatDocument = HydratedDocument<Seat>;

@Schema({ timestamps: true })
export class Seat {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: "SeatType", required: true })
  seat_type_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Venue", required: true })
  venue_id: Types.ObjectId;

  @Prop({ default: true })
  is_available: boolean;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);
