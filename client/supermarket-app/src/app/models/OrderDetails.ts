import { Cart } from './Cart';
export class OrderDetails {
    public constructor(
        public currentCart?:Cart, 
        public userId?: any ,
        public grandTotal?: number,
        public city?: string,
        public street?: string,
        public shippingDate?: Date,
        public orderDate?: Date,
        public creditCard?: number,
    ) { }
}