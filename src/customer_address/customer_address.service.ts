import { Injectable } from "@nestjs/common";
import { CreateCustomerAddressDto } from "./dto/create-customer_address.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerAddress } from "./schemas/customer_address.schemas";
import { Model } from "mongoose";
import { UpdateCustomerAddressDto } from "./dto/update-customer_address.dto";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress.name)
    private customerAddressSchema: Model<CustomerAddress>
  ) {}
  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    const created = new this.customerAddressSchema(createCustomerAddressDto);
    return await created.save();
  }

  findAll() {
    return this.customerAddressSchema.find();
  }

  findOne(id: string) {
    return this.customerAddressSchema.findById(id);
  }

  findByEmail(email: string) {
    return this.customerAddressSchema.findOne({ email });
  }

  update(id: string, updatecustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressSchema.findByIdAndUpdate(
      id,
      updatecustomerAddressDto
    );
  }

  remove(id: string) {
    return this.customerAddressSchema.findByIdAndDelete(id);
  }
}
