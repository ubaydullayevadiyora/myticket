import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentMethodDocument = PaymentMethod & Document;

@Schema()
export class PaymentMethod {
  @Prop({ required: true, unique: true })
  name: string;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);
