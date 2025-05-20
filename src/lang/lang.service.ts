import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lang, LangDocument } from "./schemas/lang.schema";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang.name) private langModel: Model<LangDocument>) {}

  create(dto: CreateLangDto) {
    return this.langModel.create(dto);
  }

  findAll() {
    return this.langModel.find();
  }

  findOne(id: string) {
    return this.langModel.findById(id);
  }

  update(id: string, dto: UpdateLangDto) {
    return this.langModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.langModel.findByIdAndDelete(id);
  }
}
