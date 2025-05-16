import { Module } from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { AdminsController } from "./admins.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin, AdminSchema } from "./schemas/admin.schema";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Admin.name, schema: AdminSchema }]),
    JwtModule,
  ],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
