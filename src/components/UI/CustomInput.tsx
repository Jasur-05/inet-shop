import React, { FC } from 'react'
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

interface ICustomInputProps {
    register: UseFormRegisterReturn;
    errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    name: string;
    holder: string;
    type: string;
}

const CustomInput: FC<ICustomInputProps> = ({register, errors, name, holder, type}) => {
    return (
        <div className="enter__item">
            <label>
                <span className='enter__text'>{name}</span>
                <input
                    {...register}
                    type={type}
                    className="enter__input"
                    placeholder={holder}
                />
            </label>
            <p className="enter__error">
                {errors && <>{errors.message}</>}
            </p>
        </div>
    )
}

export default CustomInput