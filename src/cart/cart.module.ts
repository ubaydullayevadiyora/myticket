import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { Cart, CartSchema } from "./schemas/cart.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
