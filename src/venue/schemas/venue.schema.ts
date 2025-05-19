import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type VenueDocument = HydratedDocument<Venue>;

@Schema({ timestamps: true })
export class Venue {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop()
  schema: string; 

  @Prop({ required: true, type: Number })
  regionId: number;

  @Prop({ required: true, type: Number })
  districtId: number;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
