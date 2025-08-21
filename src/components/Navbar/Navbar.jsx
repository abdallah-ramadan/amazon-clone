import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/imk-logo.png";
import engllish from "../../assets/images/india.jpg";
import arabic from "../../assets/images/egypt.jpg";
import { Link, Navigate, NavLink } from "react-router-dom";
// import { useLocation} from "react-router-dom";
import { UserContext } from '../../Context/userContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Navbar() {
  let {userLogin,setuserLogin}=useContext(UserContext)
  let navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();
// const appearLogout = ["/home", "/courses", "/categories","/About_Us","/cart","/notifications"].includes(location.pathname);
function signout(){
  localStorage.removeItem("userToken");
  setuserLogin(null);
  navigate("/login")
}

  return (
    <>
      <header className="bg-darkgray fixed inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-6 py-3 lg:px-8"
          aria-label="Global"
        >
          <Link to={"home"} className="lg:pe-4">
            <span className="sr-only">Your Company</span>
            <img className="" src={logo} width={100} alt />
          </Link>
          <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
            <button
              type="button"
              className="ms-2 hover:bg-transparent focus:bg-transparent bg-transparent hover:ring-1 hover:ring-yellow focus:ring-1 p-2.5"
            >
              <span className="sr-only">Open ext menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {userLogin!=null?
          <>
          <div className="hidden lg:flex lg:gap-x-5 capitalize items-center flex justify-center">
            <div className="flex-column">
              <h4 className="text-gray">Delivering to Surat 394210</h4>
            <a href="#" className="text-white font-medium flex gap-1 hover:text-yellow focus:text-yellow"><i class="fa-solid fa-location-dot"></i>Update location</a>
            </div>
            

          {/* <NavLink to={"home"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            home
          </NavLink>
          <NavLink to={"user"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            user
          </NavLink>
          <NavLink to={"About_Us"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            About_Us
          </NavLink>
          <NavLink to={"courses"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            courses
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            categories
          </NavLink>
          <NavLink to={"cart"} className=" font-medium text-amber-50 hover:text-stone-300 focus:text-stone-300">
            Cart
          </NavLink> */}

         <form className="flex items-center max-w-sm mx-auto ms-10">

<Menu as="div" className="relative inline-block ">
      <MenuButton className="-me-2.5 inline-flex w-full justify-center gap-x-1.5 bg-gray px-2.5 py-2.5 text-sm font-semibold text-darkgray hover:text-gray inset-ring-1 inset-ring-white/5 hover:bg-white/20 focus:outline-none focus:ring-yellow hover:ring-1 hover:ring-yellow">
        All
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
              Best Sellers
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Fashion
            </a>
          </MenuItem>
        </div>
        <div className="py-1 bg-white">
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Home & Kitchen
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Electronics
            </a>
          </MenuItem>
        </div>
        <div className="py-1 bg-white">
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Amazon mini TV
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Sales
            </a>
          </MenuItem>
        </div>
        <div className="py-1 bg-white">
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              New Releases
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>

  <label for="simple-search" className="sr-only">Search</label>
  <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <svg className="w-4 h-4 text-darkgray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
          </svg>
      </div>
      <input type="text" id="simple-search" className="bg-stone-50  text-darkgray text-sm  focus:border-none focus:outline-none focus:ring-1 focus:ring-yellow block w-full ps-10 p-2.5 " placeholder="Search Amazon.in" required />
  </div>
  <button type="submit" className="p-3 -ms-1 text-sm font-medium text-darkgray bg-yellow  border-none hover:bg-darkyellow hover:text-gray inset-ring-1 focus:outline-none  hover:ring-1 hover:ring-yellow">
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
  </button>
</form>

          </div>
         <div>

         </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">



            {/* <ul className="flex space-x-2">
              <li> <Link to={"notifications"}>
            <i class="fa-solid fa-bell text-white hover:text-yellow focus:text-yellow"></i>
            </Link></li>
           
              <li>
                <Link><i className="fab fa-facebook-f fa-sm text-white hover:text-yellow focus:text-yellow"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-x-twitter fa-sm text-white hover:text-yellow focus:text-yellow"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-instagram fa-sm text-white hover:text-yellow focus:text-yellow"></i></Link>
              </li>
              <li>
                <Link><i className="fab fa-telegram-plane fa-sm text-white hover:text-yellow focus:text-yellow"></i></Link>
              </li>
            </ul> */}
            </div>
        </>:null}
          


            {userLogin!=null?
<div className="flex justify-around">
<Menu as="div" className="relative inline-block ms-3">
      <MenuButton className="-me-2.5 inline-flex w-full justify-center gap-x-1.5 bg-transparent px-2.5 py-2.5 text-sm font-semibold text-gray hover:text-gray inset-ring-1 inset-ring-white/5 hover:bg-transparent focus:outline-none focus:ring-yellow hover:ring-1 hover:ring-yellow">
        <div className="img w-10"><img className="" src={engllish} width={100} alt /></div>EN
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
              <div className="img w-10"><img className="" src={engllish} width={100} alt /></div>EN
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="img w-10"><img className="" src={arabic} width={100} alt /></div>AR
            </a>
          </MenuItem>
        </div>
       
      </MenuItems>
    </Menu>

    <div className="flex-column ms-3">
              <h4 className="text-gray">Hello, sign in</h4>
            <a href="#" className="text-white font-medium flex gap-1 hover:text-yellow focus:text-yellow">Account &Lists</a>
            </div>

            <div className="flex-column ms-3">
              <h4 className="text-gray">Returns
</h4>
            <a href="#" className="text-white font-medium flex gap-1 hover:text-yellow focus:text-yellow">& Orders</a>
            </div>

            <NavLink to={"cart"} className=" font-medium text-yellow hover:text-yellow focus:text-yellow text-3xl mt-2 ms-3">
            <i class="fa-solid fa-basket-shopping"></i>Cart
          </NavLink>


          <NavLink to={"login"} onClick={signout} className="ms-3 block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">
              Log Out <i class="fa-solid fa-right-from-bracket"></i>
            </NavLink>

</div>
            
    

              :
            <>
            <NavLink to={"/"} className=" block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">
              Register
            </NavLink>
            <NavLink to={"login"} className=" font-medium">
              <span aria-hidden="true" className=" block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">Login</span>
            </NavLink>
            </>}




        {/* Mobile menu, show/hide based on menu open state. */}
        <div
          className={isOpen ? "lg:hidden" : "hidden"}
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-50 " />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-text-slate px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-ext-600/10 bg-darkblue text-amber-50 bg-darkgray">
            <div className="flex items-center justify-between ">
              <NavLink to={"home"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="" src={logo} width={120} alt />
              </NavLink>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="-m-2.5 hover:bg-transparent focus:bg-transparent bg-transparent hover:ring-1 hover:ring-yellow focus:ring-1 p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-ext-500/10">
              {userLogin!=null?<>
                <div className="space-y-2 py-6">
                  <NavLink
                    to={"home"}
                    className=" block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"About_Us"}
                    className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow"
                  >
                    About_Us
                  </NavLink>
                  <NavLink
                    to={"courses"}
                    className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow"
                  >
                    Brands
                  </NavLink>
                  <NavLink to={"courses"} className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">
            courses
          </NavLink>
                  <NavLink
                    to={"categories"}
                    className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow"
                  >
                    Categories
                  </NavLink>
                  <NavLink to={"cart"} className="block rounded-lg  font-medium text-amber-50 hover:text-yellow focus:text-yellow">
            Cart
          </NavLink>
                </div>
                <div>
                <form className="flex items-center max-w-sm mx-auto mt-5 mb-5">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-darkgray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-stone-50  text-darkgray text-sm  focus:border-none focus:outline-none focus:ring-1 focus:ring-yellow block w-full ps-10 p-2.5 " placeholder="Search course name..." />
    </div>
    <button type="submit" className="-ms-1 p-3 text-sm font-medium text-darkgray bg-yellow  border-none hover:bg-darkyellow hover:text-gray inset-ring-1 focus:outline-none  hover:ring-1 hover:ring-yellow">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3">
            <ul className="flex space-x-2">
              <li> <Link to={"notifications"}>
            <i class="fa-solid fa-bell text-amber-50 hover:text-stone-300 focus:text-stone-300"></i>
            </Link></li>
           
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
</>:null}
                
                <div className="py-6">
                <div>
            {userLogin!=null?
            
              <NavLink to={"/login"} onClick={signout} className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">
              Log Out<i class="fa-solid fa-right-from-bracket"></i>
            </NavLink>
            :
            <>
            <NavLink to={"/"} className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">
              Register
            </NavLink>
            <NavLink to={"login"} className=" font-medium ms-5">
              <span aria-hidden="true" className="block rounded-lg  font-medium text-white hover:text-yellow focus:text-yellow">Login</span>
            </NavLink>
            </>}

            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </nav>

         {userLogin!=null?
         <>
         <div className="hidden lg:flex justify-around p-4 bg-verydarkblue">
          <NavLink to={"home"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            All
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Amazon mini TV
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Sell
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Best Sellers
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Today’s Deals
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Mobiles
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Customer Service
          </NavLink>
          <Menu as="div" className="relative inline-block ">
      <MenuButton className="-mt-2 inline-flex w-full justify-center gap-x-1.5 bg-transparent p-2 text-md font-semibold text-white hover:text-yellow hover:bg-transparent focus:bg-transparent ring-yellow">
        Prime
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
              2-Hour Delivery on Everyday Items
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="text-darkgray hover:text-darkyellow block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
            >
              Prime Products
            </a>
          </MenuItem>
        </div>
       
      </MenuItems>
    </Menu>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Electronics
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Fashion
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            New Releases
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Home & Kitchen
          </NavLink>
          <NavLink to={"categories"} className=" font-medium text-white hover:text-yellow focus:text-yellow">
            Amazon Pay
          </NavLink>
          </div>
         </>
         :null}
        
      </header>
    </>

  );
}
