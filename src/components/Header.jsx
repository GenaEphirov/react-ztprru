import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return(
    <header>
      <div className={s.header}>
        <a href="" className={s.button}>Главная</a>
        <a href="" className={s.button}>Чатик</a>
      </div>
    </header>
  )
}

export default Header