import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from "./schemas/event.schema";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private model: Model<EventDocument>) {}

  create(dto: CreateEventDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model
      .find()
      .populate("event_type_id", "name") 
      .populate("human_category_id", "name start_age finish_age gender")
      .populate("venue_id", "name") 
      .populate("lang_id", "name");
  }

  findOne(id: string) {
    return this.model
      .findById(id)
      .populate("event_type_id")
      .populate("human_category_id")
      .populate("venue_id")
      .populate("lang_id");
  }

  update(id: string, dto: UpdateEventDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
