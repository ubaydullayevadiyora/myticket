import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Type, TypeDocument } from "./schemas/type.schema";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type.name) private typeModel: Model<TypeDocument>) {}

  async create(createTypeDto: CreateTypeDto) {
    return this.typeModel.create(createTypeDto);
  }

  async findAll() {
    return this.typeModel.find().exec();
  }

  async findOne(id: string) {
    const type = await this.typeModel.findById(id);
    if (!type) throw new NotFoundException("Type not found");
    return type;
  }

  async update(id: string, updateTypeDto: UpdateTypeDto) {
    const updated = await this.typeModel.findByIdAndUpdate(id, updateTypeDto, {
      new: true,
    });
    if (!updated) throw new NotFoundException("Type not found");
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.typeModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException("Type not found");
    return deleted;
  }
}
