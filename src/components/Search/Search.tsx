import React, { useState } from 'react'
import s from './Search.module.scss'
import { searchclose, searchIcon } from '../../utils'
import filterStore from '../../store/filterStore'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const {setSearch} = filterStore()
  const submit = (event: React.FormEvent)=>{
    event.preventDefault();
    setSearch(searchText)
  }
  const reset = ()=>{
    setSearchText('');
    setSearch('')
  }
  return (
    <form action="" className={s.search} onSubmit={submit}>
      <button className={s.search__btn}>
        <img src={searchIcon} alt="" />
      </button>
      <input 
        type="text" 
        className={s.search__input} 
        placeholder='Введите блюдо или состав' 
        value={searchText}
        onChange={(event)=>{ setSearchText(event.target.value);}}
      />
      { searchText && <img src={searchclose} alt="" className={s.search__clear} onClick={reset}/> }
    </form>
  )
}

export default Search