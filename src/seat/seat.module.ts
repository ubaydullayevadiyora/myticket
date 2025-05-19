import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatService } from "./seat.service";
import { SeatController } from "./seat.controller";
import { Seat, SeatSchema } from "./schemas/seat.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seat.name, schema: SeatSchema }]),
  ],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
