import { Injectable } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Region, RegionDocument } from "./schemas/region.schema";
import { Model } from "mongoose";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private regionSchema: Model<RegionDocument>
  ) {}

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    const createdRegion = new this.regionSchema(createRegionDto);
    return createdRegion.save();
  }

  findAll() {
    return this.regionSchema.find().populate("districts");
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }

  //

  async findAllWithDistrict() {
    return this.regionSchema.find().populate("region", "name").exec();
  }
}
