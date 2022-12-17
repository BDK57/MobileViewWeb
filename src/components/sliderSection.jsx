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

    <div>
      <div className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-20 my-6 font-Sans`}>
        {props.stats.map((val) => {
          return (

            <div key={props.id} id='div1' className={`flex items-center flex-row justify-center  flex-1 m-4`}>
              <h2 key={val.id} className={`${styles.heading2} w-fit font-sans font-light text-heading`}>{val.title}</h2>
            </div>
          )

        }
        )
        }

      </div >

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={pagination}


        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 0,

          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }

        }

        modules={[Pagination]}
        className="mySwiper"
      >


        <div className={`flex flex-1 justify-around flex-col md:flex-row pb-12 border-red-400 border-4`}>
          {props.cards.map((val, index) => {
            return (
              <SwiperSlide>
                <div className="card flex justify-between items-center  flex-col mb-20" key={props.id}>
                  <img src={val.img} alt={val.id} className='reveal scale-up-center  w-fit h-[375px]' />

                  <div className={`${styles.flexCenter} flex-col`}>
                    <h1 className={`${styles.heading2} w-auto font-extralight text-heading`}>{val.name}</h1>
                    <p className={`${styles.paragraph} md:p-6 p-0 text-center text-sectionHeading min-h-max`}>{val.content}</p>
                  </div>

                  <button className={`py-2 px-4 max-w-xs  bg-buttonColor items-center`}>{val.buttoninfo}</button>
                </div>
              </SwiperSlide>
            )
          })}
          {props.cards.map((val, index) => {
            return (
              <SwiperSlide>
                <div className="card flex justify-between items-center  flex-col mb-20 " key={props.id}>
                  <img src={val.img} alt={val.id} className='w-fit h-[375px]' />

                  <div className={`${styles.flexCenter} flex-col`}>
                    <h1 className={`${styles.heading2} w-auto font-extralight text-heading`}>{val.name}</h1>
                    <p className={`${styles.paragraph} md:p-6 p-0 text-center text-sectionHeading`}>{val.content}</p>
                  </div>

                  <button className={`py-2 px-4 max-w-xs  bg-buttonColor `}>{val.buttoninfo}</button>
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