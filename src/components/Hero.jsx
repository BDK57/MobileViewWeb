// import { root } from "postcss";
import React from "react";
import { headerBg } from "../asset1/asset";
import styles from "../style";

// xs: "480px",
// ss: "620px",
// sm: "768px",
// md: "1060px",
// lg: "1200px",
//  xl: "1700px",

const Hero = () => (
  <section className={`flex md:flex-row relative ${styles.flexCenter} ${styles.paddingY}`}>

    {/* Right Main Div 1 for section Flex */}
    {/* <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    > */}


    {/* !Discount Div */}
    {/* <div className="flex flex-row items-center py-[6px] px-4
  bg-discount-gradient rounded-[10px] mb-2">

        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for {" "}
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div> */}
    {/* End DIV DISCOUNT */}


    {/* Heading + Get Started Here */}

    {/* <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px]
text-[52px] text-white ss:leading-[100px] leading-[72px]">The Next
          <br className="sm:block hidden" />
          <span className="text-gradient"> Generation</span>

        </h1> */}

    {/* Button COmponent */}
    {/* <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div> */}

    {/* </div> */}

    {/* Heading Div End Here */}

    {/* 
    <h1 className="font-poppins font-semibold ss:text-[68px]
      text-[52px] text-white ss:leading-[100px] leading-[72px] w-full">Payment Method
    </h1>

    <p className={`${styles.paragraph} max-w-[470px] text-white mt-5`}>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum dicta eum suscipit voluptatibus culpa in deleniti! Sed, dolorem, illum, ipsa consequatur facilis nisi vitae quaerat voluptatem distinctio odio eveniet. Ipsam, soluta.</p>

  </div> {/* { Right mAin Div end Here } */ }

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0  relative right-0 lg:right-4 xl:right-20`}>
      <img src={headerBg} alt="Header BG" className=" bounceInLeft  max-w-screen-xs ss:max-w-screen-ss md:max-w-screen-md   lg:max-w-screen-lg xl:max-w-screen-xl h-max relative z-[5]" />

      <div className="absolute z-2 w-[80%] h-[80%] white__gradient bottom-40 rounded-full" />

      <div className="absolute z-1 w-[50%] h-[50%] blue__gradient right-20 bottom-20" />
    </div>

    {/* <div className="flex justify-center items-center ss:hidden">
      <GetStarted />
    </div> */}
  </section >
);

export default Hero;
