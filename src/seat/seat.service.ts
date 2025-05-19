import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Seat, SeatDocument } from "./schemas/seat.schema";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat.name)
    private seatModel: Model<SeatDocument>
  ) {}

  create(dto: CreateSeatDto) {
    return this.seatModel.create(dto);
  }

  findAll() {
    return this.seatModel.find().populate("seat_type_id").populate("venue_id");
  }

  findOne(id: string) {
    return this.seatModel
      .findById(id)
      .populate("seat_type_id")
      .populate("venue_id");
  }

  update(id: string, dto: UpdateSeatDto) {
    return this.seatModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.seatModel.findByIdAndDelete(id);
  }
}
