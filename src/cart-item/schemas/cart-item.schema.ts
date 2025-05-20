import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartItemDocument = CartItem & Document;

@Schema()
export class CartItem {
  @Prop({ required: true })
  cart_id: number;

  @Prop({ required: true })
  ticket_id: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
