import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DeliveryMethod, DeliveryMethodSchema } from "./schemas/delivery_method.schema";
import { DeliveryMethodController } from "./delivery_method.controller";
import { DeliveryMethodService } from "./delivery_method.service";


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DeliveryMethod.name, schema: DeliveryMethodSchema },
    ]),
  ],
  controllers: [DeliveryMethodController],
  providers: [DeliveryMethodService],
})
export class DeliveryMethodModule {}
