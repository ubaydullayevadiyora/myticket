import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Booking, BookingDocument } from "./schemas/booking.schema";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private model: Model<BookingDocument>
  ) {}

  create(dto: CreateBookingDto) {
    return new this.model(dto).save();
  }

  findAll() {
    return this.model
      .find()
      .populate(
        "cart_id payment_method_id delivery_method_id discount_coupon_id status_id"
      )
      .exec();
  }

  findOne(id: string) {
    return this.model
      .findById(id)
      .populate(
        "cart_id payment_method_id delivery_method_id discount_coupon_id status_id"
      )
      .exec();
  }

  update(id: string, dto: UpdateBookingDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
