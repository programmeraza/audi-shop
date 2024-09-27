import React from 'react'
import "./Reser.scss"

const Reser = () => {
  return (
    <>
    <div className="reser">
        <div className="container">
            <div className="reser__wrapper">
                <div className="reser__content">
                    <img className='reser__image' src="/audi-logo-black.png" alt="logo-black" />
                    <p className='reser__text'>Audi of America takes efforts to ensure the accuracy of information on the general vehicle information pages. Models are shown for illustration purposes only and may include features that are not available on the US model. As errors may occur or availability may change, please see dealer for complete details and current model specifications.</p>
                    <div className="reser__ul-flex">
                        <div className="reser__ul-flex-direction">
                            <ul className="reser__ul">
                                <li>Explore</li>
                                <li>Models</li>
                                <li>Audi Sport</li>
                            </ul>
                            <ul className="reser__ul">
                                <li>Support</li>
                                <li>Contact us</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div className="reser__follow">
                            <p>Follow Us</p>
                            <div className="reser__icon">
                                <img src="/facebook.png" alt="" />
                                <img src="/twitter.png" alt="" />
                                <img src="/instagram.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="reser__text-footer">© 2023 Audi of America. All rights reserved.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reser