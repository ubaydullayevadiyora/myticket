import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueTypesService } from "./venue-types.service";
import { CreateVenueTypeDto } from "./dto/create-venue-type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue-type.dto";

@Controller("venue-types")
export class VenueTypesController {
  constructor(private readonly venueTypesService: VenueTypesService) {}

  @Post()
  create(@Body() dto: CreateVenueTypeDto) {
    return this.venueTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.venueTypesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueTypesService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateVenueTypeDto) {
    return this.venueTypesService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueTypesService.remove(id);
  }
}
