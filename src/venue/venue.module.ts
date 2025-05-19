// src/venue/venue.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { Venue, VenueSchema } from "./schemas/venue.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Venue.name, schema: VenueSchema }]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
