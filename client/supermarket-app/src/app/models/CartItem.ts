import { Product } from 'src/app/models/Product';
export class CartItem {
  public constructor(
    public item?: Product,
    public quantity?: number,
    public totalPrice?: number
  ) {}
}
