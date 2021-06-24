import SliderContent from './SliderContent'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination } from 'swiper/core'

import "./Slider.scss"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"

SwiperCore.use([Pagination]);

const Slider = () => {
  return (
    <Swiper pagination={true}>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider