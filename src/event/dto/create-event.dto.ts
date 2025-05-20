import { IsString, IsOptional, IsMongoId, IsDateString } from "class-validator";

export class CreateEventDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  @IsString()
  start_time?: string;

  @IsOptional()
  @IsDateString()
  finish_date?: string;

  @IsOptional()
  @IsString()
  finish_time?: string;

  @IsOptional()
  @IsString()
  info?: string;

  @IsMongoId()
  event_type_id: string;

  @IsMongoId()
  human_category_id: string;

  @IsMongoId()
  venue_id: string;

  @IsMongoId()
  lang_id: string;

  @IsOptional()
  @IsDateString()
  release_date?: string;
}
