import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type BookingDocument = Booking & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: false } })
export class Booking {
  @Prop({ type: Types.ObjectId, ref: "Cart", required: true })
  cart_id: Types.ObjectId;

  @Prop({ type: Date, required: false })
  finishedAt?: Date;

  @Prop({ type: Types.ObjectId, ref: "PaymentMethod", required: false })
  payment_method_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "DeliveryMethod", required: false })
  delivery_method_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "DiscountCoupon", required: false })
  discount_coupon_id?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "TicketStatus", required: false })
  status_id?: Types.ObjectId;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
