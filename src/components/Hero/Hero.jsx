import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__block">
                    <h1 className='hero__title'>2023 Audi RS e-tron® GT</h1>
                    <p className="hero__text">Starting at $144,900</p>
                    <div className="hero__btn-flex">
                        <button className="hero__btn1">Build & price</button>
                        <button className="hero__btn2">Get Audi news & updates</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero