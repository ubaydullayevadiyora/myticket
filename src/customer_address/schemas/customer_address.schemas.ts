import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  customer_id: number;

  @Prop()
  name: string;

  @Prop()
  region_id: number;

  @Prop()
  district_id: number;

  @Prop()
  street: string;

  @Prop()
  house: string;

  @Prop()
  flat: number;

  @Prop()
  location: string;

  @Prop()
  post_index: string;

  @Prop()
  info: string;
}

export const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);
