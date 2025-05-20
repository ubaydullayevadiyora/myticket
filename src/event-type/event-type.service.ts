import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventType, EventTypeDocument } from "./schemas/event-type.schema";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name) private model: Model<EventTypeDocument>
  ) {}

  create(dto: CreateEventTypeDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().populate("parent_event_type_id");
  }

  findOne(id: string) {
    return this.model.findById(id).populate("parent_event_type_id");
  }

  update(id: string, dto: UpdateEventTypeDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
