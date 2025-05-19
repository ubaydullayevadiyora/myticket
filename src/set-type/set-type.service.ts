import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SeatType, SeatTypeDocument } from "./schemas/set-type.schema";
import { CreateSeatTypeDto } from "./dto/create-set-type.dto";
import { UpdateSeatTypeDto } from "./dto/update-set-type.dto";

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType.name)
    private seatTypeModel: Model<SeatTypeDocument>
  ) {}

  create(dto: CreateSeatTypeDto) {
    return this.seatTypeModel.create(dto);
  }

  findAll() {
    return this.seatTypeModel.find();
  }

  findOne(id: string) {
    return this.seatTypeModel.findById(id);
  }

  update(id: string, dto: UpdateSeatTypeDto) {
    return this.seatTypeModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.seatTypeModel.findByIdAndDelete(id);
  }
}
