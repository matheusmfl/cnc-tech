'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import { ReactNode } from 'react'

export function SliderComponent({ element }: { element: ReactNode[] }) {
  return (
    <div className=" bg-slate-200 rounded-3xl">
      <Swiper
        scrollbar={{ el: '.swiper-scrollbar', draggable: true, enabled: true }}
        pagination={{ enabled: true, clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
