import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type VenueTypesDocument = HydratedDocument<VenueTypes>;

@Schema({ timestamps: true })
export class VenueTypes {
  @Prop({ type: Types.ObjectId, ref: "Venue", required: true })
  venueId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "Types", required: true })
  typeId: Types.ObjectId;
}

export const VenueTypesSchema = SchemaFactory.createForClass(VenueTypes);
