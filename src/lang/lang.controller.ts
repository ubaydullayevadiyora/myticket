import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LangService } from "./lang.service";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";

@Controller("lang")
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Post()
  create(@Body() dto: CreateLangDto) {
    return this.langService.create(dto);
  }

  @Get()
  findAll() {
    return this.langService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.langService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateLangDto) {
    return this.langService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.langService.remove(id);
  }
}
