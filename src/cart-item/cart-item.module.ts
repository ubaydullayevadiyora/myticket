import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartItemService } from "./cart-item.service";
import { CartItemController } from "./cart-item.controller";
import { CartItem, CartItemSchema } from "./schemas/cart-item.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartItem.name, schema: CartItemSchema },
    ]),
  ],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
