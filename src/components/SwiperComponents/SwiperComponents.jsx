import React from 'react';
import "./SwiperComponents.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="swiperr">
            <div className="swiperr__wrapper">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='swiperr__slide'>
                      <p>Launch control. Legendary Audi performance is at the heart of the Audi RS  e-tron GT, featuring exhilarating launch control, boosting the power to achieve up to 637 HP</p>
                    </SwiperSlide>
                    <SwiperSlide className='swiperr__slide'>
                      <p>Launch control. Legendary Audi performance is at the heart of the Audi RS  e-tron GT, featuring exhilarating launch control, boosting the power to achieve up to 637 HP</p>
                    </SwiperSlide>
                    <SwiperSlide className='swiperr__slide'>
                      <p>Launch control. Legendary Audi performance is at the heart of the Audi RS  e-tron GT, featuring exhilarating launch control, boosting the power to achieve up to 637 HP</p>
                    </SwiperSlide>
                    <SwiperSlide className='swiperr__slide'>
                      <p>Launch control. Legendary Audi performance is at the heart of the Audi RS  e-tron GT, featuring exhilarating launch control, boosting the power to achieve up to 637 HP</p>
                    </SwiperSlide>
                </Swiper>
            </div>
    </div>
  );
}

export default SwiperComponent;
