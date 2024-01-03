import Image from 'next/image';
import React from 'react'
import Layer from '../../../public/icons/Layer_1.png'
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
  <section className='h-full w-full bg-black  py-4 px-3 pt-8'>
            <div className=' rounded-xl text-xs text-white px-5 space-y-8 2xl:flex 2xl:space-x-20 2xl:py-16 2xl:px-10   md:text-base 2xl:text-base 2xl:justify-center md:grid md:justify-center'>
            <div className='lg:flex lg:space-x-3 2xl:mt-4 lg:mt-3 lg:items-center'>

                <div className='lg:flex lg:space-x-3  '>
                    <div className='flex justify-center pb-2 '>
                        <Image src={Layer} alt='Layer' className='h-20 w-20'/>
                    </div>
                    <p className='md:flex md:justify-center lg:pt-6 md:pb-3 pb-3 text-center'><span>
                    Heritage embrace, a contented heart space.
                    </span></p>
                </div>
                <hr/>
                <div>
                    <div className='space-y-3 grid justify-center md:flex md:pb-0 md:space-x-4 lg:mt-[-25px] mt-4'>
                    <div className=' text-center  md:pb-0 md:pt-4'>
                          <span>About Heritage:</span>
                    </div>
                    <label htmlFor='text'>
                         <input type='text' id='text' placeholder='Enter The Message' className='px-4 py-1 rounded-xl text-black  hover:border-yellow-300 border border-yellow-500'></input>
                    </label>

                        <div className='flex justify-center'>
                            <button className='bg-yellow-500 py-1 px-4 rounded-xl'>Let&apos;s Talk</button>
                        </div>  
                    </div>
                </div>
            </div>
                <div className='flex justify-center space-x-3 md:space-x-7  '>
                    <div className='2xl:mt-3 '>
                        <a href='https://www.facebook.com/' className='' target='_blank'>
                        <ImFacebook2  />
                        </a>
                    </div>
                    <div className='2xl:mt-3'>
                        <a href='https://www.instagram.com/accounts/login/' target='_blank'>
                        <GrInstagram />
                        </a>
                    </div>
                    <div className='2xl:mt-3'>
                        <a href='https://twitter.com/' target='_blank'>
                        <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div>
                    <div className='space-y-1 md:flex md:justify-center space-x-3'>
                        <span className='flex justify-center md:pt-1'>
                        Terms And conditions.
                        </span>
                        <span className='flex justify-center'>
                            Follow The Rules.
                        </span>
                    </div>
                </div>
            </div>
                <p className='text-white text-center text-xs  md:text-base'>Copyright @2024  Heritage</p>   
  </section>
  )
}

export default Footer;
