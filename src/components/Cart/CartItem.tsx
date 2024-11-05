import React, { FC } from 'react'
import s from './CartBlock.module.scss'
import { closeIcon, productImg } from '../../utils'
import cartStore, { ICartProduct } from '../../store/cartStore'
import { IProduct } from '../../types'

const CartItem: FC<ICartProduct> = ({image, title, price, amount, id}/* props */) => {
  // console.log(props);
  const {addToCart} = cartStore()
  return (
    <div className={s.cart__item}>
        <div className={s.cart__info}>
            <img src={image} alt="" className={s.cart__img} />
            <h3 className={s.cart__name}>{title}</h3>
            <p className={s.cart__price}>{+price * amount} ₽</p>
        </div>
        <div className={s.cart__controls}>
            <button className={s.cart__minus}>–</button>
            <span className={s.cart__amount}>{amount}</span>
            <button onClick={()=>{addToCart({id} as IProduct)}} className={s.cart__plus}>+</button>
            <img src={closeIcon} alt="" className={s.cart__del} />
        </div>
    </div>
  )
}

export default CartItem