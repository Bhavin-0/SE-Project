import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export const GallerySection = () => {
  const images = [
    '../images/factory_pic_5.jpeg',
    '../images/factory_pic_2.jpeg',
    '../images/factory_pic_3.jpeg',
    '../images/factory_pic_8.jpeg',
    '../images/factory_pic_7.jpeg',
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Factory in Action</h2>

      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-xl shadow-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Factory view ${idx + 1}`}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
