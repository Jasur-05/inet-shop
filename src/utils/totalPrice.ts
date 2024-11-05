import { ICartProduct } from "../store/cartStore";

export default function totalPrice(carts:ICartProduct[]): number {
      return carts.reduce(
        (accamulator, elem) => accamulator + +elem.price * elem.amount,
        0
      );
}