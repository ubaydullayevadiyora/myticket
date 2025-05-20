export class CreateBookingDto {
  cart_id: string;
  finishedAt?: Date;
  payment_method_id?: string;
  delivery_method_id?: string;
  discount_coupon_id?: string;
  status_id?: string;
}
