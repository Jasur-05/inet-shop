import { IProduct } from "../types";
import api from "./api";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

interface IParams {
    sort: string,
    limit: number,
    search: string,
    skip: number
}

export const useGetProducts = ({sort, limit, search, skip}: IParams)=>{
    return useQuery({
        queryKey: ['products', sort, search, skip],
        queryFn: ()=> api.get(`/products?ordering=${sort}&limit=${limit}&search=${search}&offset=${skip}`),
        select: (response)=> response.data
    })
}

export const useGetProductById = (id: string | undefined): UseQueryResult<IProduct> =>{
    return useQuery({
        queryKey: ['product', id],
        queryFn: ()=> api.get(`/products/${id}`),
        select: (response)=> response.data
    })
}

// http://45.138.158.114/api/v1/products ? limit=6 & ordering=title & search=sdxgsdf
//http://45.138.158.114/api/v1/products? limit=6 &offset=5 & ordering=5464 & search=456456