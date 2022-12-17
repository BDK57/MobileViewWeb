import React from 'react'
import styles from '../style'
// import { cards, stats } from '../constants'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
const SliderSection = (props) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet "></span>`;
    },

  };


  return (

    <div className='fadeInUp'>


      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={pagination}


        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,

          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }

        }

        modules={[Pagination]}
        className="mySwiper"
      >


        <div className={`flex flex-1 justify-start items-start flex-col md:flex-row pb-12 border-red-400 border-4`}>
          {props.cards.map((val, index) => {
            return (
              <SwiperSlide>
                <div className="  reveal card flex justify-between flex-col md:flex-row mb-10" key={props.id}>
                  <img src={val.img} alt={val.id} className=' reveal fadeInUp ss:max-w-screen-ss sm:max-w-screen-sm items-start ml-0 xl:ml-[-120px]' />

                  <div className={`${styles.flexCenter} flex-col justify-start items-center md:mt-0 xlmt-[-100px]`}>
                    <h1 className={`${styles.heading2} w-auto font-extralight text-heading `}>{val.name}</h1>
                    <p className={`${styles.paragraph} md:p-0 p-0 text-center text-sectionHeading min-h-max`}>{val.content}</p>
                    <div>
                    </div>
                    <div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            )
          })}


        </div>


      </Swiper>
    </div>


  )

}

export default SliderSection;