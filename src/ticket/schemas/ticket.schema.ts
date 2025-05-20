import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ timestamps: true })
export class Ticket {
  @Prop()
  event_id: number;
  @Prop()
  seat_id: number;
  @Prop()
  price: number;
  @Prop()
  service_fee: number;
  @Prop()
  status_id: number;
  @Prop()
  ticket_type: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
