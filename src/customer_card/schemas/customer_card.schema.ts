import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema()
export class CustomerCard {
  @Prop()
  customer_id: number;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  year: string;

  @Prop()
  month: string;

  @Prop()
  is_active: boolean;

  @Prop()
  is_main: boolean;
}

export const CustomerCardSchema = SchemaFactory.createForClass(CustomerCard);
