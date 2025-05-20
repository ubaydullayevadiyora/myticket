import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
  @Prop({ required: true })
  customer_id: number;

  @Prop()
  finished_at: Date;

  @Prop({ required: true })
  status_id: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
