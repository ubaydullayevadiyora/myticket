import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Customer, CustomerSchema } from "./schemas/customer.schema";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
    JwtModule,
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
