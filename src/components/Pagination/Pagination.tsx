import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import s from './Pagination.module.scss'

interface IPaginationProps {
    totalCount: number,
    changePage: (num: number)=>void,
    limit: number, 
    currentPage: number
}

const Pagination: FC<IPaginationProps> = ({totalCount, changePage, limit, currentPage}) => {
  const total = Math.ceil(totalCount / limit);
  return (
    <ReactPaginate
        className={s.pagination}
        activeClassName={s.active}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(page)=>{
          changePage(page.selected)
        }}
        pageRangeDisplayed={3}
        pageCount={total}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
  )
}

export default Pagination