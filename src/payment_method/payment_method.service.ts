import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PaymentMethod, PaymentMethodDocument } from "./schemas/payment_method.schema";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";


@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name) private model: Model<PaymentMethodDocument>
  ) {}

  create(dto: CreatePaymentMethodDto) {
    return new this.model(dto).save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, dto: UpdatePaymentMethodDto) {
    return this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
