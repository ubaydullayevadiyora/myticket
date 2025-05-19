import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateVenueTypeDto } from "./dto/create-venue-type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue-type.dto";
import { VenueTypes, VenueTypesDocument } from "./schema/venue-type.schema";

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel(VenueTypes.name)
    private readonly venueTypesModel: Model<VenueTypesDocument>
  ) {}

  create(dto: CreateVenueTypeDto) {
    return this.venueTypesModel.create(dto);
  }

  findAll() {
    return this.venueTypesModel.find().populate("venueId").populate("typeId");
  }

  findOne(id: string) {
    return this.venueTypesModel
      .findById(id)
      .populate("venueId")
      .populate("typeId");
  }

  update(id: string, dto: UpdateVenueTypeDto) {
    return this.venueTypesModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.venueTypesModel.findByIdAndDelete(id);
  }
}
