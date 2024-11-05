import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IProduct } from '../types'
import totalPrice from '../utils/totalPrice';

export interface ICartProduct extends IProduct {
    amount: number
}

interface ICartStore {
    cart: ICartProduct[],
    totalCost: number,
    addToCart: (product: IProduct)=>void
}

const storage = localStorage.getItem('cart')
const carts: ICartProduct[] = storage ? JSON.parse(storage) : [];
const total = carts.reduce((accamulator, elem)=>(
    accamulator + +elem.price * elem.amount 
), 0)

const cartStore = create<ICartStore>()(devtools((set)=>({
    cart: carts,
    totalCost: total /* 0 */,
    addToCart: (product)=>{
        // set({cart: [{...product, amount: 1}]})
        set((state)=>{
            const {cart} = state;
            const find = cart.find((elem)=> elem.id == product.id);
            let newCart = cart 
            if (find) {
                const newCart = cart.map((elem)=>{
                    return elem.id == product.id ? {...elem, amount: ++elem.amount } : elem;
                })
                return {cart: newCart, totalCost: totalPrice(newCart)}
            } else {
                newCart = [...state.cart, {...product, amount: 1}]
                return { cart: newCart, totalCost: totalPrice(newCart)}                
            }
        })
    }
})))

export default cartStore