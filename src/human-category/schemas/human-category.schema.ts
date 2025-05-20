import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HumanCategoryDocument = HydratedDocument<HumanCategory>;

@Schema()
export class HumanCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  start_age: number;

  @Prop({ required: true })
  finish_age: number;

  @Prop({ required: true, enum: ["male", "female", "other", "all"] })
  gender: "male" | "female" | "other" | "all";
}

export const HumanCategorySchema = SchemaFactory.createForClass(HumanCategory);
