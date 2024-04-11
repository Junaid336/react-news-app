import { Slide } from './Slide';
import Heading from '../../Heading';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

export const Slider = ({items}) => {
    return (
        <>
            <Heading text="Most Popular" />
            <div className="h-[440px] w-full">
                <Swiper 
                navigation={true} 
                autoplay={true} 
                modules={[Navigation, Autoplay]} 
                className="mySwiper">
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Slide item={item} />
                        </SwiperSlide>    
                    ))}
                </Swiper>
            </div>
        </>
    )
}
