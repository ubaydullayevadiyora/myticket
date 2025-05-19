// src/venue/venue.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";

@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  create(@Body() dto: CreateVenueDto) {
    return this.venueService.create(dto);
  }

  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.venueService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() dto: UpdateVenueDto) {
    return this.venueService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.venueService.remove(id);
  }
}
