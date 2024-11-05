import React from 'react'
import s from './User.module.scss'
import { cartIcon, logoutIcon, menuIcon, productImg, userIcon, userPhoto } from '../../utils'
import { Paths } from '../../routes/paths'
import { NavLink, useNavigate } from 'react-router-dom'
import CustomBtn from '../UI/CustomBtn'
import userStore from '../../store/userStore'
import UserSkeleton from './UserSkeleton'

const links = [
  {url: Paths.menu, name: 'Меню', icon: menuIcon},
  {url: Paths.cart, name: 'Корзина', icon: cartIcon},
  {url: Paths.profile, name: 'Профиль', icon: userIcon},
]

const User = () => {
  const { logout, user } = userStore();
  const navigate = useNavigate()
  const logoutUser = ()=>{
    logout();
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate(Paths.login)
  }
  const userImg = user?.avatar ? import.meta.env.VITE_IMG_URL + user.avatar : userPhoto
  return user ? (
    <div className={s.user}>
        <div className={s.user__info}>
            <img src={userImg} alt="" className={s.user__img} />
            <h2 className={s.user__name}>{user.username}</h2>
            <p className={s.user__email}>{user.email}</p>
        </div>
        <ul className={s.user__menu}>
          {
            links.map((elem)=>(
              <li key={elem.url}>
                <NavLink to={elem.url} className={s.user__link}>
                  <img src={elem.icon} alt="" />
                  {elem.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <CustomBtn 
          text='Выйти'
          icon={logoutIcon}
          width={117}
          height={43}
          mt='auto'
          onClick={logoutUser}
        />
    </div>
  ) : <UserSkeleton/>
}

export default User