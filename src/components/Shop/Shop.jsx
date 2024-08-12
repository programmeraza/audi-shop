import React from 'react'
import "./Shop.scss"

const Shop = () => {
  return (
    <>
    <div className="shop">
        <div className="container">
            <div className="shop__wrapper">
                <img src="/audi-shop.png" alt="shop" />
                <div className="shop__btn-flex">
                    <button className="shop__btn-first">Build & price</button>
                    <button className="shop__btn-second">Contact dealer</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop