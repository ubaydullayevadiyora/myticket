import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TicketStatusDocument = TicketStatus & Document;

@Schema()
export class TicketStatus {
  @Prop({ required: true, unique: true })
  name: string;
}

export const TicketStatusSchema = SchemaFactory.createForClass(TicketStatus);
