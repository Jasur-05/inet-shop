import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Paths } from '../routes/paths';
import { useCurrentUser } from '../services/user';
import userStore from '../store/userStore';

const PrivateRoute = () => {
    const {data} = useCurrentUser();
    const {setUser} = userStore();
    const navigate = useNavigate()
    const access_token = localStorage.getItem('access_token');
    useEffect(()=>{
        if(!access_token){
            navigate(Paths.login)
        }
    },[access_token])
    useEffect(()=>{
      if (data) {
        setUser(data)        
      }
    }, [data])

  return (
    <Outlet/>
  )
}

export default PrivateRoute