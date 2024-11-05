import React, { FC } from 'react'
import s from './CustomBtn.module.scss'

interface ICustomBtnProps {
    text: string
    icon?: string
    width: number
    height: number,
    mt?: string,
    active?: boolean
    disabled?: boolean
    onClick?: ()=>void
}

const CustomBtn: FC<ICustomBtnProps> = ({ text, icon, width, height, mt, active, disabled, onClick}) => {
  return (
    <button 
        disabled={disabled} 
        className={`${s.btn} ${!!active && s.active}`} 
        style={{width, height, marginTop: mt}}
        onClick={onClick}
    >
        {icon && <img src={icon} alt="" />}
        <span>{text}</span>
    </button>
  )
}

export default CustomBtn