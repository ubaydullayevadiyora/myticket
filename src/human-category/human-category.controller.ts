import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { HumanCategoryService } from "./human-category.service";
import { CreateHumanCategoryDto } from "./dto/create-human-category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human-category.dto";

@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly service: HumanCategoryService) {}

  @Post()
  create(@Body() dto: CreateHumanCategoryDto) {
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
  update(@Param("id") id: string, @Body() dto: UpdateHumanCategoryDto) {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.remove(id);
  }
}
