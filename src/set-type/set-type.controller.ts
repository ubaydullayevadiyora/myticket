import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatTypeService } from "./set-type.service";
import { CreateSeatTypeDto } from "./dto/create-set-type.dto";
import { UpdateSeatTypeDto } from "./dto/update-set-type.dto";

@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @Post()
  create(@Body() dto: CreateSeatTypeDto) {
    return this.seatTypeService.create(dto);
  }

  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatTypeService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSeatTypeDto) {
    return this.seatTypeService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatTypeService.remove(id);
  }
}
