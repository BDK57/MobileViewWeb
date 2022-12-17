import React from 'react'
import { menu, close } from '../assets'
import { logo1, V35 } from '../asset1/asset.jsx'
import { navLinks, navToplinks, navToplinks2, sociallogo } from '../constants'
import { useState } from 'react'
// import style from '../style'
// import 'flowbite'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)

  return (
    <>
      {/* 
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px", */}

      <ul className='sm:flex hidden justify-end items-center list-none  text-navText'>
        {navToplinks.map((nav, index) => {
          return (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer mt-4 items-center 
            sm:text-[12px]  ${index !== navToplinks.length - 1 ? 'px-4  border-r-2 border-navBorder' : 'px-4 md:mr-8 '}`}>

              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>

          )
        })}

        {navToplinks2.map((nav, index) => {
          return (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer mt-4 flex  pr-4 mr-2 justify-center items-center
            sm:text-[8px]  md:text-[12px]   ${index > navToplinks.length ? ' border-none' : ' border-r-2 border-navBorder'}`}>

              <img src={nav.img} alt="" className='inline w-8  h-[12px] md:h-[20px] md:w-fit pr-2' />
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>


            </li>

          )
        })}

        {sociallogo.map((nav, index) => {
          return (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer mt-4 flex  justify-center items-center
            sm:text-[8px]  md:text-[12px]`}>

              <img src={nav.img} alt="" className='inline mx-4' />
            </li>

          )
        })}


        <div className="mb-3 w-40 lg:w-48 ">
          <div className="input-group  relative top-5 flex flex-wrap items-center w-full mb-4">
            <input type="search" className=" md:block form-control relative flex-auto min-w-0 block w-10 px-1 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            <button className="btn  px-3 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>

          </div>
        </div>

      </ul>



      {/* Other NavBar */}
      <nav className='flex justify-between items-center w-full py-6 relative navbar text-navText'>
        <img src={logo1} alt="" className='w-[124px] h-[32px]' />

        <ul className='sm:flex hidden justify-end items-center list-none flex-1 '>
          {navLinks.map((nav, index) => {
            return (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-
              [16px] px-4 ${index === navLinks.length - 1 ? 'mr-0' : 'border-r-2  border-gray-400'} mainli `}>
                <a href={`#${nav.id}`} onClick={() => {
                  setToggle1(!toggle1)
                }}


                >
                  {nav.title}
                </a>

                <ul className='nestedNavbar flex flex-col justify-between absolute font-Sans '>

                  <div className='flex justify-between  relative left-[-2.8%] z-30  bg-dimWhite'>

                    <div className='flex items-center border-2 py-6 px-4'>
                      <div className='relative h-fit'>
                        <img src={V35} alt="" className='max-w-[120px]' />
                      </div>
                      <div className='px-10'>

                        <li className='font-bold text-heading'>SmartPhone</li>
                        <li>Xtreme 90</li>
                        <li>Xtreme 75</li>

                        <li>Xtreme 88</li>
                        <li>Xtreme 96</li>
                      </div>
                    </div>

                    <div className='flex items-center border-2 py-6 px-4'>
                      <div className='relative h-fit'>
                        <img src={V35} alt="" className='max-w-[120px]' />
                      </div>
                      <div className='px-10'>

                        <li className='font-bold text-heading'>Barphone</li>
                        <li>V90</li>
                        <li>V12</li>

                        <li>V56</li>
                        <li>V42</li>
                      </div>
                    </div>

                  </div>

                </ul>
              </li>
            )
          })}
        </ul>

        <div className={`${toggle1 ? 'visible' : 'hidden'} p-6 bg-black-gradient absolute top-50 z-10 left-[-50%] sidebar min-w-[140] my-2 rounded-xl`}>

          <ul className='flex  justify-center items-center list-none flex-1 flex-col'>
            {navLinks.map((nav, index) => {
              return (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-
              [16px] ${index === (navLinks.length - 1) ? 'mb-0' : 'mb-5'}`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* BurgerMenu */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[38px] h-[32px]'
            onClick={() => {
              setToggle(!toggle)
            }}

          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-14 right-5 sidebar min-w-[140] my-2 rounded-xl`}>

            <ul className='flex  justify-center items-center list-none flex-1 flex-col'>
              {navLinks.map((nav, index) => {
                return (
                  <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-
              [16px] ${index === (navLinks.length - 1) ? 'mb-0' : 'mb-5'}`}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </nav>



    </>
  )
}

export default Navbar