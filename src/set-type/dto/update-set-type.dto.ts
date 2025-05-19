import { PartialType } from "@nestjs/mapped-types";
import { CreateSeatTypeDto } from "./create-set-type.dto"

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {}
