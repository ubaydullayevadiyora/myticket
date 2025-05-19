import { Injectable } from "@nestjs/common";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerCard } from "./schemas/customer_card.schema";
import { Model } from "mongoose";
@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard.name)
    private customerCardSchema: Model<CustomerCard>
  ) {}
  async create(createCustomerCardDto: CreateCustomerCardDto) {
    const created = new this.customerCardSchema(createCustomerCardDto);
    return await created.save();
  }

  findAll() {
    return this.customerCardSchema.find();
  }

  findOne(id: string) {
    return this.customerCardSchema.findById(id);
  }

  findByEmail(email: string) {
    return this.customerCardSchema.findOne({ email });
  }

  update(id: string, updatecustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardSchema.findByIdAndUpdate(id, updatecustomerCardDto);
  }

  remove(id: string) {
    return this.customerCardSchema.findByIdAndDelete(id);
  }
}
