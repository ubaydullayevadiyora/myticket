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
import { VenueModule } from './venue/venue.module';
import { TypesModule } from './types/types.module';
import { VenueTypesModule } from './venue-types/venue-types.module';
import { SeatModule } from './seat/seat.module';
import { SeatTypeModule } from "./set-type/set-type.module";
import { VenuPhotoModule } from "./venue-photo/venue-photo.module";
import { TicketModule } from './ticket/ticket.module';
import { EventModule } from './event/event.module';
import { LangModule } from './lang/lang.module';
import { EventTypeModule } from './event-type/event-type.module';
import { HumanCategoryModule } from './human-category/human-category.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { TicketStatusModule } from './ticket-status/ticket-status.module';
import { BookingModule } from './booking/booking.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';

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
    VenueModule,
    TypesModule,
    VenueTypesModule,
    VenuPhotoModule,
    SeatTypeModule,
    SeatModule,
    TicketModule,
    EventModule,
    LangModule,
    EventTypeModule,
    HumanCategoryModule,
    CartModule,
    CartItemModule,
    TicketStatusModule,
    BookingModule,
    PaymentMethodModule,
    DeliveryMethodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
