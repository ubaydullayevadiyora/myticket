import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DeliveryMethodDocument = DeliveryMethod & Document;

@Schema()
export class DeliveryMethod {
  @Prop({ required: true, unique: true })
  name: string;
}

export const DeliveryMethodSchema =
  SchemaFactory.createForClass(DeliveryMethod);
