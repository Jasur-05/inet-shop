import React from 'react'
import s from './Products.module.scss'
import Sort from '../Sort/Sort'
import Search from '../Search/Search'
import ProductsItem from './ProductsItem'
import { useGetProducts } from '../../services/products'
import { IProduct } from '../../types'
import ProductsSkeleton from './ProductsSkeleton'
import filterStore from '../../store/filterStore'
import Pagination from '../Pagination/Pagination'

const Products = () => {
  const {sortValue, limit, search, currentPage, setCurrentPage, skip, setSkip} = filterStore()
  const {data} = useGetProducts({sort: sortValue, limit: limit, search: search, skip: skip})
  const products = data?.results.map((elem: IProduct)=>(
    <ProductsItem key={elem.id} {...elem}/>
    ))

  const skeletons = [...Array(6)].map((_, i)=><ProductsSkeleton key={i}/>)
  const changePage =(num: number)=>{
    setCurrentPage(num)
    setSkip(num * limit)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
    
//   console.log(skeletons);
  return (
    <div className={s.products}>
        <div className={s.products__filter}>
            <h1 className={s.products__title}>Меню</h1>
            <Sort/>
            <Search/>
        </div>
        <div className={s.products__list}>
            {
                data ? products : skeletons
            }
        </div>
        {data && <Pagination totalCount={data.count} changePage={changePage} limit={limit} currentPage={currentPage}/>}
    </div>
  )
}

export default Products