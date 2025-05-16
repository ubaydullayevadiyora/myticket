import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { Customer, CustomerDocument } from "./schemas/customer.schema";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerSchema: Model<Customer>,
    private readonly jwtService: JwtService
  ) {}

  async generateTokens(customer: CustomerDocument) {
    const payload = {
      id: customer.id,
      email: customer.email,
      phone: customer.phone,
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

  async create(createcustomerDto: CreateCustomerDto) {
    const { password, confirm_password, email } = createcustomerDto;
    const customer = await this.customerSchema.findOne({ email });
    if (customer) {
      throw new BadRequestException("bunday emailli foydalanuvchi mavjud");
    }
    if (password !== confirm_password) {
      throw new BadRequestException("parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(password, 7);
    return this.customerSchema.create({
      ...createcustomerDto,
      hashed_password,
    });
  }

  findAll() {
    return this.customerSchema.find();
  }

  findOne(id: string) {
    return this.customerSchema.findById(id);
  }

  findByEmail(email: string) {
    return this.customerSchema.findOne({ email });
  }

  update(id: string, updatecustomerDto: UpdateCustomerDto) {
    return this.customerSchema.findByIdAndUpdate(id, updatecustomerDto);
  }

  remove(id: string) {
    return this.customerSchema.findByIdAndDelete(id);
  }
}
