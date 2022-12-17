import React from 'react'
import { LogoFooter } from '../asset1/asset'
import { footerLinks, footerLinks2 } from '../constants'

const Footer = () => {
  // xs: "480px",
  //   ss: "620px",
  //     sm: "768px",
  //       md: "1060px",
  //         lg: "1200px",
  //           xl: "1700px",
  return (
    <>
      <div className=" flex justify-center align-align-middle items-center text-start w-full bg-footer text-white ">

        <div className='flex  flex-row justify-around items-end text-white mr-12'>

          <div>
          </div>
          <div className='flex flex-col justify-around items-center  max-h-full `'>
            <img src={LogoFooter} alt="" className='h-[60px] w-full mb-48 xs:max-w-xs  ss:max-w-screen-ss sm:max-w-screen-sm md:max-w-screen-md' />


          </div>
        </div>

        <div className='flex justify-center items-center'>
          <ul className='flex  text-start justify-center list-none flex-1 flex-col text-white'>
            {footerLinks.map((val, index) => {
              return (
                <li key={val.id} className={`text-start font-Sans font-normal cursor-pointer text-[12px] md:text-[16px] ${index === (footerLinks.length - 1) ? 'mb-0' : 'mb-1.5'}`}>
                  <a href={`#${val.id}`} >
                    <span className='font-bold'>{val.title}</span>
                    {val.name}

                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='flex justify-center items-center mx-5 my-2'>
          <ul className='flex  text-start justify-center list-none flex-1 flex-col text-white text-[12px]'>
            {footerLinks2.map((val, index) => {
              return (
                <li key={index} className={`text-start font-Sans font-normal cursor-pointer text-[12px] md:text-[16px] ${index === (footerLinks.length - 1) ? 'mb-0' : 'mb-1'}`}>
                  <a href={`#${val.id}`} >
                    <span className='font-bold'>{val.title}</span>
                    {val.name}

                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='flex justify-start flex-col items-start py-24'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d139267.71124064585!2d67.05613784965853!3d24.820703189289503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.8437105!2d67.2013657!4m5!1s0x3eb33ce2f7454fe1%3A0x684a098526922171!2sgoogle%20symmetry%20group%20Dha%20phase!3m2!1d24.7922072!2d67.0643042!5e1!3m2!1sen!2s!4v1670132742719!5m2!1sen!2s" title="Googlemaps" width="400" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='hidden sm:inline'></iframe>
          <p className='font-Sans font-bold text-white hidden sm:inline'>Contact Us</p>
          <div className="flex justify-center">
            <div className="my-5 xl:w-96">

              <textarea className="form-control  w-full px-3 py-0 hidden sm:inline focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="3" placeholder="Your message"></textarea>
              <p className='font-Sans font-bold hidden sm:inline text-white'>Newsletter</p>
            </div>
          </div>

        </div>

      </div>

      <div className='flex justify-center items-center bg-footer h-28 pb-2  '> <p className='inline font-Sans font-normal text-center text-white  items-end min-w-12'>Voice Tel All Right Reversed</p></div>
    </>

  )
}

export default Footer