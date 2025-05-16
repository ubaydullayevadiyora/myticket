import { Module } from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CustomerCardController } from "./customer_card.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerCard, CustomerCardSchema } from "./schemas/customer_card.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerCard.name, schema: CustomerCardSchema },
    ]),
  ],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
