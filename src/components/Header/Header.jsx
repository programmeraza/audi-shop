import React, { useState } from 'react'
import "./Header.scss"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isBurgerX, setIsBurgerX] = useState(false)

    const toggleBurger = () => {
        toggleBurgerX()
        toggleMenu()
    }

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    const toggleBurgerX = () => {
        setIsBurgerX(prev => !prev)
    }

    const toggleCloseMenu = () => {
        toggleBurger()
    }

  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
                <img src="/audi-logo.png" alt="logo" />
                <ul className="header__ul">
                    <a href="#">RS-eTron</a>
                    <a href="#">Models</a>
                    <a href="#">Discover</a>
                    <a href="#">Login</a>
                </ul>

                <button onClick={toggleBurger} className={isBurgerX ? 'header__burger active' : 'header__burger'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={isOpen ? 'header__menu active' : 'header__menu'}>
                    <ul className="header__inner">
                        <a onClick={toggleCloseMenu} href="#">RS-eTron</a>
                        <a onClick={toggleCloseMenu} href="#">Models</a>
                        <a onClick={toggleCloseMenu} href="#">Discover</a>
                        <a onClick={toggleCloseMenu} href="#">Login</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header