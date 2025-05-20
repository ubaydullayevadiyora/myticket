import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HumanCategory,
  HumanCategoryDocument,
} from "./schemas/human-category.schema";
import { CreateHumanCategoryDto } from "./dto/create-human-category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human-category.dto";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory.name) private model: Model<HumanCategoryDocument>
  ) {}

  create(dto: CreateHumanCategoryDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, dto: UpdateHumanCategoryDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
