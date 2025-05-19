import { IsMongoId, IsString } from "class-validator";

export class CreateVenuPhotoDto {
  @IsMongoId()
  venueId: string;

  @IsString()
  photoUrl: string;
}
