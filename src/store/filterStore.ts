import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface IFilterStore {
    sortValue: string,
    setSortValue: (value: string)=>void,
    limit: number,
    search: string,
    setSearch: (value: string)=>void,
    currentPage: number,
    setCurrentPage: (value: number)=>void,
    skip: number,
    setSkip: (value: number)=>void
}

const filterStore = create<IFilterStore>()(devtools((set)=>({
    sortValue: '',
    setSortValue: (value)=>{
        set({sortValue: value})
    },
    limit: 6,
    search: '',
    setSearch: (value)=>{
        set({search: value})
    },
    currentPage: 0,
    setCurrentPage: (value)=>{
        set({currentPage: value})
    },
    skip: 0,
    setSkip: (value)=>{
        set({skip: value})
    }
})))

export default filterStore