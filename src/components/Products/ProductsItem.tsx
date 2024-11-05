import React, { FC } from 'react'
import s from './Products.module.scss'
import { basketIcon, starIcon } from '../../utils'
import { IProduct } from '../../types';
import { Link } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import cartStore from '../../store/cartStore';
import { toast } from 'react-toastify';

const ProductsItem: FC<IProduct> = (data) => {
  const {image, price, rating, title, description, id} = data;
  const {cart, addToCart} = cartStore();
  const addCart = ()=>{
      addToCart(data!);
      toast.success('Товар добавлен в корзину!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
  }
  return (
    <div className={s.products__item}>
          <Link to={Paths.product + id}>
          <img src={image} alt="" className={s.products__img} />
          </Link>
          <p className={s.products__price}>
              {Math.round(+price)} <span>₽</span> 
          </p>
          <button onClick={addCart} className={s.products__btn}>
              <img src={basketIcon} alt="" />
          </button>
          <p className={s.products__rate}>
              {rating}
              <img src={starIcon} alt="" />
          </p>
          <Link to={Paths.product + id}>
            <h3 className={s.products__name}>{title}</h3>
            <p className={s.products__desc}>{description}</p>
          </Link>
      </div>        
  )
}

export default ProductsItem