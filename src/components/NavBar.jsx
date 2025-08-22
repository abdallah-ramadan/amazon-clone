import React, { useState } from "react";
import engllish from "../assets/Images/india.jpg";
import arabic from "../assets/Images/egypt.jpg";
import { Link, NavLink } from "react-router-dom";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { amounts } = useSelector(state => state.cart)

    return (
        <>
            <header className="tw-bg-[#131921] tw-text-[#D9D9D9] tw-sticky tw-inset-x-0 tw-top-0 tw-z-50">
                {/* Top section with logo, search, and account links */}
                <div className="tw-flex tw-items-center tw-justify-between tw-px-4 tw-py-2 md:tw-px-6 md:tw-py-3">
                    {/* Logo */}
                    <Link to={"home"} className="md:tw-pe-4">
                        <span className="tw-sr-only">Your Company</span>
                        <img className="tw-h-8 md:tw-h-10" src='/logo-nav.png' width={100} alt="logo" />
                    </Link>

                    {/* Search form - visible on medium screens and up */}
                    <div className="tw-hidden md:tw-flex tw-items-center tw-flex-1 tw-max-w-2xl tw-mx-4">
                        <form className="tw-flex tw-items-center tw-w-full">
                            <Menu as="div" className="tw-relative tw-inline-block">
                                <MenuButton className="tw--me-2.5 tw-inline-flex tw-w-full tw-justify-center tw-gap-x-1.5 tw-bg-[#D9D9D9] tw-px-2.5 tw-py-2 tw-text-sm tw-font-semibold tw-text-[#131921] hover:tw-text-[#D9D9D9] tw-inset-ring-1 tw-inset-ring-white/5 hover:tw-bg-white/20 focus:tw-outline-none">
                                    All
                                    <ChevronDownIcon aria-hidden="true" className="tw--mr-1 tw-size-5 tw-text-[#131921]" />
                                </MenuButton>

                                <MenuItems className="tw-absolute tw-left-0 tw-z-10 tw-mt-2 tw-w-56 tw-origin-top-right tw-divide-y tw-divide-white/10 tw-rounded-md tw-bg-white tw-outline-1 -tw-outline-offset-1 tw-outline-white/10">
                                    <div className="tw-py-1">
                                        <MenuItem>
                                            <a href="#" className="tw-text-[#131921] hover:tw-text-[#c49d05ff] tw-block tw-px-4 tw-py-2 tw-text-sm">
                                                Best Sellers
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="#" className="tw-text-[#131921] hover:tw-text-[#c49d05ff] tw-block tw-px-4 tw-py-2 tw-text-sm">
                                                Fashion
                                            </a>
                                        </MenuItem>
                                    </div>
                                    <div className="tw-py-1">
                                        <MenuItem>
                                            <a href="#" className="tw-text-[#131921] hover:tw-text-[#c49d05ff] tw-block tw-px-4 tw-py-2 tw-text-sm">
                                                Home & Kitchen
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a href="#" className="tw-text-[#131921] hover:tw-text-[#c49d05ff] tw-block tw-px-4 tw-py-2 tw-text-sm">
                                                Electronics
                                            </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>

                            <div className="tw-relative tw-w-full">
                                <input type="text" className="tw-bg-white tw-text-[#131921] tw-text-sm focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-[#FFCC00] tw-block tw-w-full tw-p-2" placeholder="Search Amazon.in" />
                            </div>
                            <button type="submit" className="tw-p-2.5 tw-text-sm tw-font-medium tw-text-[#131921] tw-bg-[#FFCC00] tw-border-none hover:tw-bg-[#c49d05ff] focus:tw-outline-none">
                                <svg className="tw-w-4 tw-h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="tw-sr-only">Search</span>
                            </button>
                        </form>
                    </div>

                    {/* Right side navigation */}
                    <div className="tw-flex tw-items-center tw-gap-2 md:tw-gap-4">
                        {/* Language Selector */}
                        <Menu as="div" className="tw-relative tw-inline-block tw-hidden md:tw-block ">
                            <MenuButton className="tw-inline-flex tw-items-center tw-gap-x-1 tw-px-2 tw-py-1 tw-text-sm tw-text-white hover:tw-text-[#FFCC00]">
                                <img className="tw-w-6 tw-h-4 tw-object-cover" src={engllish} alt="English" />
                                <ChevronDownIcon aria-hidden="true" className="tw-w-4 tw-h-4" />
                            </MenuButton>
                            <MenuItems className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-32 tw-origin-top-right tw-rounded-md tw-bg-white tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none">
                                <div className="tw-py-1">
                                    <MenuItem>
                                        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100">
                                            <img className="tw-w-6 tw-h-4 tw-object-cover tw-inline-block tw-mr-2" src={engllish} alt="English" />
                                            EN
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-gray-700 hover:tw-bg-gray-100">
                                            <img className="tw-w-6 tw-h-4 tw-object-cover tw-inline-block tw-mr-2" src={arabic} alt="Arabic" />
                                            AR
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>

                        <NavLink to={sessionStorage.getItem("user") == undefined ? "/login" : ""} className="tw-hidden md:tw-block tw-cursor-pointer tw-py-1 tw-px-2 tw-border tw-border-transparent hover:tw-border-white">
                            <div className="tw-text-xs tw-text-[#D9D9D9]">Hello, sign in</div>
                            <div className="tw-text-sm tw-font-medium tw-text-white">Account & Lists</div>
                        </NavLink>

                        <div className="tw-hidden md:tw-block tw-border tw-border-transparent hover:tw-border-white tw-py-1 tw-px-2 tw-cursor-pointer">
                            <div className="tw-text-xs tw-text-[#D9D9D9]">Returns</div>
                            <div className="tw-text-sm tw-font-medium tw-text-white">& Orders</div>
                        </div>

                        <NavLink to={"/cart"} className="tw-flex tw-items-end tw-font-medium tw-gap-1">
                            <div className=" tw-relative">
                                <GrCart className="tw-text-2xl" />
                                <span className=" tw-text-xs tw-w-4 tw-text-center tw-h-4 tw-rounded-full tw-bg-yellow-600 tw-absolute tw-text-white tw--top-1 tw--right-2">{amounts}</span>
                            </div>
                            <span className="tw-hidden md:tw-inline tw-text-xs">Cart</span>
                        </NavLink>

                        {/* Mobile menu button */}
                        <button
                            className="md:tw-hidden tw-p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="tw-size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu (shown when button is clicked) */}
                {isMobileMenuOpen && (
                    <div className="md:tw-hidden tw-bg-[#232F3E] tw-p-4">
                        <div className="tw-space-y-3">
                            <div className="tw-flex tw-items-center tw-gap-2 tw-pb-2 tw-border-b tw-border-gray-600">
                                <div>
                                    <div className="tw-text-xs tw-text-[#D9D9D9]">Hello, sign in</div>
                                    <div className="tw-text-sm tw-font-medium tw-text-white">Account & Lists</div>
                                </div>
                            </div>

                            <div className="tw-pb-2 tw-border-b tw-border-gray-600">
                                <div className="tw-text-xs tw-text-[#D9D9D9]">Returns</div>
                                <div className="tw-text-sm tw-font-medium tw-text-white">& Orders</div>
                            </div>

                            {/* Mobile search form */}
                            <form className="tw-flex tw-items-center tw-w-full tw-pt-2">
                                <input type="text" className="tw-flex-1 tw-bg-white tw-text-[#131921] tw-text-sm tw-p-2 tw-rounded-l" placeholder="Search Amazon.in" />
                                <button type="submit" className="tw-p-2.5 tw-text-sm tw-font-medium tw-text-[#131921] tw-bg-[#FFCC00] tw-border-none tw-rounded-r">
                                    <svg className="tw-w-4 tw-h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Category navigation */}
                <div className="tw-w-full tw-bg-[#232F3E]">
                    <div className="tw-flex tw-items-center tw-gap-4 tw-px-4 tw-py-2 tw-overflow-x-auto tw-mx-auto" style={{ scrollbarWidth: "thin" }}>
                        <div className="tw-flex tw-items-center md:tw-hidden">
                            <button
                                className="tw-text-white tw-p-1"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg className="tw-w-5 tw-h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <span className="tw-sr-only">Menu</span>
                            </button>
                        </div>

                        <NavLink to={"/"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            All
                        </NavLink>
                        <NavLink to={"/products/smartphones"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            Smartphones
                        </NavLink>
                        <NavLink to={"/products/laptops"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            Laptops
                        </NavLink>
                        <NavLink to={"/products/fragrances"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            Fragrances
                        </NavLink>
                        <NavLink to={"/products/skin-care"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            Skin Care
                        </NavLink>
                        <NavLink to={"/products/groceries"} className="tw-font-medium tw-text-sm tw-text-white hover:tw-underline tw-whitespace-nowrap">
                            Groceries
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );

}
