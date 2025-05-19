import { IsBoolean, IsMongoId, IsString } from "class-validator";

export class CreateSeatDto {
  @IsString()
  name: string;

  @IsMongoId()
  seat_type_id: string;

  @IsMongoId()
  venue_id: string;

  @IsBoolean()
  is_available: boolean;
}
