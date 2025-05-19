import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common"
import { VenuPhotoService } from "./venue-photo.service";
import { CreateVenuPhotoDto } from "./dto/create-venue-photo.dto";
import { UpdateVenuPhotoDto } from "./dto/update-venue-photo.dto";

@Controller("venu-photo")
export class VenuPhotoController {
  constructor(private readonly venuPhotoService: VenuPhotoService) {}

  @Post()
  create(@Body() dto: CreateVenuPhotoDto) {
    return this.venuPhotoService.create(dto);
  }

  @Get()
  findAll() {
    return this.venuPhotoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuPhotoService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateVenuPhotoDto) {
    return this.venuPhotoService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuPhotoService.remove(id);
  }
}
