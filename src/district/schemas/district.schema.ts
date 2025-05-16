import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schemas/region.schema";

export type DistrictDocument = HydratedDocument<District>;

@Schema()
export class District {
  @Prop()
  name: string;

  @Prop({
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    },
  })
  region: Region[];
}

export const DistrictSchema = SchemaFactory.createForClass(District);
