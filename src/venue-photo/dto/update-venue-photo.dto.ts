import { PartialType } from "@nestjs/mapped-types";
import { CreateVenuPhotoDto } from "./create-venue-photo.dto";

export class UpdateVenuPhotoDto extends PartialType(CreateVenuPhotoDto) {}
