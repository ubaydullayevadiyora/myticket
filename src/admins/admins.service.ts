import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Admin, AdminDocument } from "./schemas/admin.schema";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name) private adminSchema: Model<Admin>,
    private readonly jwtService: JwtService
  ) {}

  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin.id,
      is_creator: admin.is_creator,
      is_active: admin.is_active,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password, email } = createAdminDto;
    const admin = await this.adminSchema.findOne({ email });
    if (admin) {
      throw new BadRequestException("bunday emailli foydalanuvchi mavjud");
    }
    if (password !== confirm_password) {
      throw new BadRequestException("parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(password, 7);
    return this.adminSchema.create({ ...createAdminDto, hashed_password });
  }

  findAll() {
    return this.adminSchema.find();
  }

  findOne(id: string) {
    return this.adminSchema.findById(id);
  }

  findByEmail(email: string) {
    return this.adminSchema.findOne({ email });
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminSchema.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    return this.adminSchema.findByIdAndDelete(id);
  }
}

// async generateTokens(admin: Admin) {
//   const payload = {
//     id: admin.id,
//     is_creator: admin.is_creator,
//     is_active: admin.is_active,
//   };
