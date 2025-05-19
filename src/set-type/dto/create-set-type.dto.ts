import { IsOptional, IsString } from "class-validator";

export class CreateSeatTypeDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
