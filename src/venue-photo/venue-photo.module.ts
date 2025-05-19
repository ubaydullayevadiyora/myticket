import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenuPhoto, VenuPhotoSchema } from "./schemas/venue-photo.schema";
import { VenuPhotoController } from "./venue-photo.controller";
import { VenuPhotoService } from "./venue-photo.service";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VenuPhoto.name, schema: VenuPhotoSchema },
    ]),
  ],
  controllers: [VenuPhotoController],
  providers: [VenuPhotoService],
})
export class VenuPhotoModule {}
