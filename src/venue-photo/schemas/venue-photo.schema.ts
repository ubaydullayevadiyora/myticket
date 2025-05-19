import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type VenuPhotoDocument = HydratedDocument<VenuPhoto>;

@Schema({ timestamps: true })
export class VenuPhoto {
  @Prop({ type: Types.ObjectId, ref: "Venue", required: true })
  venueId: Types.ObjectId;

  @Prop({ required: true })
  photoUrl: string;
}

export const VenuPhotoSchema = SchemaFactory.createForClass(VenuPhoto);
