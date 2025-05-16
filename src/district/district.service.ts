import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/mongoose";
import { District, DistrictDocument } from "./schemas/district.schema";
import mongoose, { Model } from "mongoose";
import { Region, RegionDocument } from "../region/schemas/region.schema";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private districtSchema: Model<DistrictDocument>,
    @InjectModel(Region.name) private regionSchema: Model<RegionDocument>
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {

    const { regionId } = createDistrictDto;
    if (!mongoose.isValidObjectId(regionId)) {
      throw new BadRequestException("region id yoq")
    }
    const region = await this.regionSchema.findById(regionId); //tashqi kalit foregin key
    if (!region) {
      throw new BadRequestException("bunday region yoq");
    }
    const district = await this.districtSchema.create(createDistrictDto);
    region.districts.push(district);
    await region.save();
    return district;
  }

  findAll() {
    return this.districtSchema.find().populate("regions");
  }

  findOne(id: number) {
    return `This action returns a #${id} district`;
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }

  //

  async findAllWithRegion() {
    return this.districtSchema.find().populate("region", "name").exec();
  }
}
