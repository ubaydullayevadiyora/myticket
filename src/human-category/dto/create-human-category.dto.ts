import { IsString, IsInt, Min, Max, IsEnum } from "class-validator";

export class CreateHumanCategoryDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  start_age: number;

  @IsInt()
  @Min(0)
  finish_age: number;

  @IsEnum(["male", "female", "other", "all"])
  gender: "male" | "female" | "other" | "all";
}
