import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  TicketStatus,
  TicketStatusDocument,
} from "./schemas/ticket-status.schema";
import { CreateTicketStatusDto } from "./dto/create-ticket-status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket-status.dto";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus.name) private model: Model<TicketStatusDocument>
  ) {}

  create(dto: CreateTicketStatusDto) {
    return new this.model(dto).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, dto: UpdateTicketStatusDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
