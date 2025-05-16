import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminsModule } from "./admins/admins.module";
import { Module } from "@nestjs/common";
// import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { DistrictModule } from './district/district.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminsModule,
    // AuthModule,
    CustomerModule,
    CustomerCardModule,
    CustomerAddressModule,
    DistrictModule,
    RegionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
