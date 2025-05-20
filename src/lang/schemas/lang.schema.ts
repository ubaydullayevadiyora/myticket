import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LangDocument = HydratedDocument<Lang>;

@Schema()
export class Lang {
  @Prop({ required: true })
  name: string;
}

export const LangSchema = SchemaFactory.createForClass(Lang);
