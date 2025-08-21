import React from 'react'
import style from './Footer.module.css'
import logo from "../../assets/images/imk-logo.png";
import bluelogo from "../../assets/images/imk-bluelogo.png";
import { Link } from 'react-router-dom';
import engllish from "../../assets/images/india.jpg";
import arabic from "../../assets/images/egypt.jpg";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Footer() {
  
  return <>

    

{/* <footer className=" rounded-lg shadow-sm bg-lightblue m-4 fixed bottom-0 left-0 right-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between flex gap-3">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img className="" src={logo} width={100} alt />
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                </span>
            </a>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
            <ul className="flex space-x-2">
            <Link to={"notifications"}>
            <i className="fa-solid fa-bell text-amber-50 hover:text-stone-300 focus:text-stone-300"></i>
            </Link>
              <li>
                <Link><i className="fab fa-facebook-f fa-sm text-amber-50 hover:text-stone-300 focus:text-stone-300"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-x-twitter fa-sm text-amber-50 hover:text-stone-300 focus:text-stone-300"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-instagram fa-sm text-amber-50 hover:text-stone-300 focus:text-stone-300"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-telegram-plane fa-sm text-amber-50 hover:text-stone-300 focus:text-stone-300"></i></Link>
              </li>
            </ul>
            
            
  



          </div>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-amber-50 sm:mb-0">
                <li>
                    <Link to={"About_Us"} className="a me-4 md:me-6  hover:text-stone-300">About_Us</Link>
                </li>
                <li>
                    <Link to={"courses"} className="a me-4 md:me-6  hover:text-stone-300">Courses</Link>
                </li>
                <li>
                    <Link to={"home"} className="a me-4 md:me-6  hover:text-stone-300">Home</Link>
                </li>
                <li>
                    <Link to={"categories"} className="a me-4 md:me-6  hover:text-stone-300">Categories</Link>
                </li>
                <li>
                    <Link to={"cart"} className="a me-4 md:me-6  hover:text-stone-300">Cart</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-stone-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm  sm:text-center text-amber-50">© 2025 <a href="https://flowbite.com/" className="a hover:text-stone-300">FRAMY™</a>. All Rights Reserved.</span>
    </div>
</footer> */}

<footer>
  <div className="bg-bluegray text-center p-5 text-white hover:text-yellow focus:text-yellow">
    <a href="#top"  className="lg:pe-4">
            Back to Top</a>
            </div>
  <div className="bg-verydarkblue">
 <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Get to know Us</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class=" a  text-white hover:text-yellow">About Us</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Press Releases</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Amazon Science</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Connect with Us</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Instagram</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Make Money with Us</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Sell on Amazon</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Sell under Amazon Accelerator</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Protect and Build Your Brand</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Amazon Global Selling</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Supply to Amazon</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Become an Affiliate</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Fulfilment by Amazon</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Advertise Your Products</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Amazon Pay on Merchants</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Let Us Help You</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Your Account</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Returns Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Recalls and Products Safety Alerts</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">100% Purchase Protection</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Amazon App Download</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="a  text-white hover:text-yellow">Help</a>
                </li>
            </ul>
        </div>
    </div>
    <hr className='text-gray' />
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-center">
        {/* <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span> */}
        <div className="img w-25"><img className="" src={bluelogo} width={100} alt /></div>

        <Menu as="div" className="relative inline-block ms-3">
              <MenuButton className="-me-2.5 inline-flex w-full justify-center gap-x-1.5 bg-transparent px-2.5 py-2.5 text-sm font-semibold text-gray hover:text-gray inset-ring-1 inset-ring-white/5 hover:bg-transparent focus:outline-none focus:ring-yellow hover:ring-1 hover:ring-yellow">
                <i class="fa-solid fa-globe"></i>English
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
        
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1 bg-white">
                  <MenuItem>
                    <a
                      href="#"
                      className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <i class="fa-solid fa-globe"></i>English
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <i class="fa-solid fa-globe"></i>Arabic
                    </a>
                  </MenuItem>
                </div>
               
              </MenuItems>
            </Menu>
        <Menu as="div" className="relative inline-block ms-3">
              <MenuButton className="-me-2.5 inline-flex w-full justify-center gap-x-1.5 bg-transparent px-2.5 py-2.5 text-sm font-semibold text-gray hover:text-gray inset-ring-1 inset-ring-white/5 hover:bg-transparent focus:outline-none focus:ring-yellow hover:ring-1 hover:ring-yellow">
                <div className="img w-10"><img className="" src={engllish} width={100} alt /></div>India
                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
        
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1 bg-white">
                  <MenuItem>
                    <a
                      href="#"
                      className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <div className="img w-10"><img className="" src={engllish} width={100} alt /></div>India
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                    >
                      <div className="img w-10"><img className="" src={arabic} width={100} alt /></div>Egypt
                    </a>
                  </MenuItem>
                </div>
               
              </MenuItems>
            </Menu>
        {/* <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div> */}
      </div>
    </div>



  </div>
  <div className="bg-darkgray">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div className='px-10'>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">AbeBooks</h2>
            <ul class="font-medium">
                <li class="mb-4">
                    <a href="#" class=" a text-gray hover:text-yellow focus:text-yellow">Books, art 
& collectibles</a>
                </li>
                <li class="mb-4">
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Shop bop</h2>
                </li>
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">Designer
Fashion Brands</a>
                </li>
            </ul>
        </div>
        <div className='px-10'>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">Amazon web Services</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">Scalable Cloud 
Computing Services</a>
                </li>
                <li class="mb-4">
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Amazon Business</h2>
                </li>
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">Everything For
Your Business</a>
                </li>
            </ul>
        </div>
        <div className='px-10'>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Audible</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">Download
Audio Books</a>
                </li>
                <li class="mb-4">
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Prime Now</h2>
                </li>
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">2-Hour Delivery
on Everyday Items</a>
                </li>
            </ul>
        </div>
        <div className='px-10'>
            <h2 class="mb-6 text-sm font-semibold  uppercase text-white">IMDb</h2>
            <ul class=" font-medium">
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">Movies, TV
& Celebrities</a>
                </li>
                <li class="mb-4">
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Amazon Prime Music</h2>
                </li>
                <li class="mb-4">
                    <a href="#" class="a text-gray hover:text-yellow focus:text-yellow">100 million sings, ad-free
Over 15 million podcast episodes</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-center text-gray gap-3">
        

        <a href='#' className='hover:text-yellow focus:text-yellow'>Conditons of Use & Sale</a>
        <a href='#' className='hover:text-yellow focus:text-yellow'>Privacy Notice</a>
        <a href="#" className='hover:text-yellow focus:text-yellow'>Interset-Based Ads</a>
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">1996-2024, Amazon.com, Inc. or its affiliates
        </span>
        
        {/* <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div> */}
      </div>
    </div>



  </div>
</footer>


  
  </>
}