'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Container1 } from './Container1'
import { Container2 } from './Container2'

export function CarrosselContainer() {
  SwiperCore.use([Autoplay, Pagination])
  return (
    <Swiper
      className="max-h-[480px] max-w-full"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5600,
      }}
      loop
    >
      <SwiperSlide>
        <Container1 />
      </SwiperSlide>
      <SwiperSlide>
        <Container2 />
      </SwiperSlide>
    </Swiper>
  )
}
