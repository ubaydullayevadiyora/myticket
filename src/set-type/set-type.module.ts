import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatType, SeatTypeSchema } from "./schemas/set-type.schema";
import { SeatTypeController } from "./set-type.controller";
import { SeatTypeService } from "./set-type.service";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SeatType.name, schema: SeatTypeSchema },
    ]),
  ],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
})
export class SeatTypeModule {}
