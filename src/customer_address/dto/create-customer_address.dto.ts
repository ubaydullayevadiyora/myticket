export class CreateCustomerAddressDto {
  customer_id: number
  name: string;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flat: number;
  location: string;
  post_index: string;
  info:string
}
