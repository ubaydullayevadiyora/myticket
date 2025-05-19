import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueTypesService } from "./venue-types.service";
import { VenueTypesController } from "./venue-types.controller";
import { VenueTypes, VenueTypesSchema } from "./schema/venue-type.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VenueTypes.name, schema: VenueTypesSchema },
    ]),
  ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
})
export class VenueTypesModule {}
