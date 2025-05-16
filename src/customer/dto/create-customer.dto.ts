import { CustomerGenderEnum } from "../../app.constants";

export class CreateCustomerDto {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  confirm_password: string;
  email: string;
  birth_date: string;
  gender: CustomerGenderEnum;
  lang_id: number;
}
