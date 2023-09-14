'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import { ReactNode } from 'react'

export function SliderComponent({ element }: { element: ReactNode[] }) {
  return (
    <div>
      <Swiper
        pagination={{ enabled: true, clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        style={{ overflow: 'visible' }}
      >
        {element.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <>{item}</>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  )
}
