import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CustomerGenderEnum } from "../../app.constants";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  hashed_password: string;

  @Prop()
  email: string;

  @Prop()
  birth_date: string;

  @Prop()
  gender: CustomerGenderEnum;

  @Prop()
  lang_id: number;

  @Prop()
  hashed_refresh_token: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
