import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Paths } from '../routes/paths';

const PublicRoute = () => {
    const navigate = useNavigate()
    const access_token = localStorage.getItem('access_token');
    useEffect(()=>{
        if(access_token){
            navigate(Paths.menu)
        }
    },[access_token])
   

  return (
    <Outlet/>
  )
}

export default PublicRoute