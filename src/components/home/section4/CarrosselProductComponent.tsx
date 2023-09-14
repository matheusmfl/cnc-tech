'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { ProductComponent } from './ProductComponent'

export function CarrosselProductComponent() {
  SwiperCore.use([Autoplay, Pagination])
  return (
    <Swiper
      className="max-h-[480px]"
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={20}
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
        <ProductComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ProductComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ProductComponent />
      </SwiperSlide>
      <SwiperSlide>
        <ProductComponent />
      </SwiperSlide>
    </Swiper>
  )
}
