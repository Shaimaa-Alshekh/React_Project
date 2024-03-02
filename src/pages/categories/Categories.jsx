import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mystyle from './categories.module.css';
function Categories() {
  const [categories,setCategories] =useState([]);
  const getCategories = async ()=>{
    const {data} =await axios.get(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9`);
    console.log(data.categories);
    setCategories(data.categories);
  }
  useEffect( ()=>{getCategories();} , [])
  return (
    <div className='container'>
   {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {categories.map(  ele=>
        <SwiperSlide className='categoryitem' key={ele.id}>
            <img src={ele.image.secure_url}  alt="" />

        </SwiperSlide>)
      }
    </Swiper>*/}
    <h2>Categories</h2>
    <Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={mystyle.mySwiper}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}
       
      >
      {categories.map(  ele=>
        <SwiperSlide className={mystyle.categoryitem} key={ele.id}>
          
            <img src={ele.image.secure_url}  alt="" />

        </SwiperSlide>)
      }        
      </Swiper>
      </div>
    
  )
}

export default Categories