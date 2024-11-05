import React, { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../services/user'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Paths } from '../routes/paths'
import { errorMess } from '../utils/errorMess'
import CustomInput from '../components/UI/CustomInput'
import { ILogin } from '../types'
import CustomBtn from '../components/UI/CustomBtn'

// username: abd1
// password: abdulla1
const Login = () => {
  const loginMutation = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { 
      errors,
      isValid
    },    
  } = useForm<ILogin>({mode: 'onChange'})
  
  const loginUser: SubmitHandler<ILogin> = async (data)=>{
    try {
      await loginMutation.mutateAsync(data)
      // console.log(data);
      console.log('Авторизация прошла успешно');
      navigate(Paths.menu)
    } catch (error) {
      setError(errorMess(error, 'login'))
      console.log(error);
    }
    reset()
  }
  return (
    <AuthLayout>
      <div className="enter">
        <h2 className="enter__title">Вход</h2>
        <form onSubmit={handleSubmit(loginUser)} action="" className="enter__form">
          <CustomInput 
            register={register('username', { 
              required: {
                value: true,
                message: 'Это поле обязательное для заполнения'
              },
              minLength: {
                value: 3,
                message: 'Минимум 3 символа'
              }
            })}
            errors={errors.username}
            type='text'
            name='Ваш логин'
            holder='Логин'
          />
          
          <CustomInput 
            register={register('password', { 
              required: {
                value: true,
                message: 'Это поле обязательное для заполнения'
              },
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              }
            })}
            errors={errors.password}
            type='password'
            name='Ваш пароль'
            holder='Пароль'
          />
          
          <CustomBtn 
            text='Вход'
            width={248}
            height={60}
            mt='auto'
            active={true}
            disabled={!isValid}
          />
          
        </form>
        <div className="enter__info">
          {error &&  <h4 className='enter__error'>{error}</h4>}
          <p className="enter__desc">Нет акканута? </p>
          <Link to={Paths.register} className='enter__link'>Зарегистрироваться</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login