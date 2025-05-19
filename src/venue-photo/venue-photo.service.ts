import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VenuPhoto, VenuPhotoDocument } from "./schemas/venue-photo.schema";
import { CreateVenuPhotoDto } from "./dto/create-venue-photo.dto";
import { UpdateVenuPhotoDto } from "./dto/update-venue-photo.dto";

@Injectable()
export class VenuPhotoService {
  constructor(
    @InjectModel(VenuPhoto.name)
    private venuPhotoModel: Model<VenuPhotoDocument>
  ) {}

  create(dto: CreateVenuPhotoDto) {
    return this.venuPhotoModel.create(dto);
  }

  findAll() {
    return this.venuPhotoModel.find().populate("venueId");
  }

  findOne(id: string) {
    return this.venuPhotoModel.findById(id).populate("venueId");
  }

  update(id: string, dto: UpdateVenuPhotoDto) {
    return this.venuPhotoModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.venuPhotoModel.findByIdAndDelete(id);
  }
}
