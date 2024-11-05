import React, { useState } from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomInput from '../components/UI/CustomInput'
import { IRegister } from '../types'
import { useRegisterMutation } from '../services/user'
import { Paths } from '../routes/paths'
import { errorMess } from '../utils/errorMess'
import CustomBtn from '../components/UI/CustomBtn'

// username: abd1
// password: abdulla1
const Register = () => {
  const registerMutation = useRegisterMutation()
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
  } = useForm<IRegister>({mode: 'onChange'})
  const pass = watch('password')
  // console.log(pass);
  const registerUser: SubmitHandler<IRegister> = async (data)=>{
    try {
      await registerMutation.mutateAsync(data)
      console.log(data);
      console.log('Регистрация прошла успешно');
      navigate(Paths.login)
    } catch (error) {
      setError(errorMess(error))
      console.log(error);
    }
    reset()
  }
  return (
    <AuthLayout>
      <div className="enter">
        <h2 className="enter__title">Регистрация</h2>
        <form onSubmit={handleSubmit(registerUser)} action="" className="enter__form">
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
            name='Ваше имя'
            holder='Имя'
          />
          <CustomInput 
            register={register('email', { 
              required: {
                value: true,
                message: 'Это поле обязательное для заполнения'
              },
              minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }
            })}
            errors={errors.email}
            type='email'
            name='Ваша почта'
            holder='Почта'
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
            holder='Ваш пароль'
          />
          <CustomInput 
            register={register('password2', { 
              required: {
                value: true,
                message: 'Это поле обязательное для заполнения'
              },
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              },
              validate: (value)=> value == pass || 'Пароли не совпадают'
            })}
            errors={errors.password2}
            type='password'
            name='Повторите пароль'
            holder='Повторите пароль'
          />
          
          <CustomBtn 
            text='Зарегистрироваться'
            width={248}
            height={60}
            mt='auto'
            active={true}
            disabled={!isValid}
          />
         
        </form>
        <div className="enter__info">
          {error &&  <h4 className='enter__error'>{error}</h4>}
          <p className="enter__desc">Есть акканут?</p>
          <Link to='/login' className='enter__link'>Войти</Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Register