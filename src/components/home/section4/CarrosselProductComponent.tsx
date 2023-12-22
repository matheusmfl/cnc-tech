'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { ProductComponent } from './ProductComponent'

interface Produto {
  title: string
  subtitle: string
  imageUrl: string
}

export function CarrosselProductComponent({ produto }: { produto: Produto[] }) {
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
      {produto.map((product) => {
        return (
          <SwiperSlide key={product.title}>
            <ProductComponent
              imageUrl={product.imageUrl}
              subtitle={product.title}
              title={product.title}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
