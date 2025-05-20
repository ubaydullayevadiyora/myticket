import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketStatusService } from "./ticket-status.service";
import { CreateTicketStatusDto } from "./dto/create-ticket-status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket-status.dto";

@Controller("ticket-statuses")
export class TicketStatusController {
  constructor(private readonly service: TicketStatusService) {}

  @Post()
  create(@Body() dto: CreateTicketStatusDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateTicketStatusDto) {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
