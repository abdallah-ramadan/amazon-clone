import React from 'react'

import engllish from "../assets/Images/india.jpg";
import arabic from "../assets/Images/egypt.jpg";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Footer() {

    return (
        <>
            <footer className=' tw-text-[#D9D9D9]'>
                {/* Back to top section */}
                <div className="tw-bg-[#37475A] tw-text-center tw-p-5 tw-text-white hover:tw-underline focus:tw-text-[#FFCC00]">
                    <a href="#top" className="tw-lg:pe-4">
                        Back to Top
                    </a>
                </div>

                {/* Main link columns section */}
                <div className="tw-bg-[#232F3E]">
                    <div className="tw-mx-auto tw-w-full tw-max-w-screen-xl">
                        <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-gap-8 tw-px-4 tw-py-6 tw-lg:py-8 tw-md:grid-cols-4">
                            {/* Column 1: Get to know Us */}
                            <div>
                                <h2 className="tw-font-bold tw-mb-6 tw-text-sm tw-uppercase tw-text-white">Get to know Us</h2>
                                <ul className="tw-font-medium">
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">About Us</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Careers</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Press Releases</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Amazon Science</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Connect with Us */}
                            <div>
                                <h2 className="tw-font-bold tw-mb-6 tw-text-sm tw-uppercase tw-text-white">Connect with Us</h2>
                                <ul className="tw-font-medium">
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Facebook</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Twitter</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Instagram</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 3: Make Money with Us */}
                            <div>
                                <h2 className="tw-font-bold tw-mb-6 tw-text-sm tw-uppercase tw-text-white">Make Money with Us</h2>
                                <ul className="tw-font-medium">
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Sell on Amazon</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Sell under Amazon Accelerator</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Protect and Build Your Brand</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Amazon Global Selling</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Supply to Amazon</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Become an Affiliate</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Fulfilment by Amazon</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Advertise Your Products</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Amazon Pay on Merchants</a>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 4: Let Us Help You */}
                            <div>
                                <h2 className="tw-font-bold tw-mb-6 tw-text-sm tw-uppercase tw-text-white">Let Us Help You</h2>
                                <ul className="tw-font-medium">
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Your Account</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Returns Center</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Recalls and Products Safety Alerts</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">100% Purchase Protection</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Amazon App Download</a>
                                    </li>
                                    <li className="tw-mb-4 tw-font-light tw-text-sm">
                                        <a href="#" className="tw-text-white hover:tw-underline">Help</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className='tw-border-gray' /> {/* Using custom gray color */}
                        <div className="tw-px-4 tw-py-6 tw-bg-darkgray tw-md:flex tw-md:items-center tw-md:justify-center tw-gap-3">
                            <div className="tw-w-25">
                                <img className="tw-h-auto" src='/logo-nav.png' width={100} alt="Logo" />
                            </div>

                            {/* Language Selector */}
                            <Menu as="div" className="tw-relative tw-inline-block tw-ms-3">
                                <MenuButton className="tw--me-2.5 tw-inline-flex tw-w-full tw-justify-center tw-gap-x-1.5 tw-bg-transparent tw-px-2.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-[#D9D9D9] hover:tw-text-[#D9D9D9] tw-inset-ring-1 tw-inset-ring-white/5 hover:tw-bg-transparent focus:tw-outline-none focus:tw-ring-[#FFCC00] hover:tw-ring-1 hover:tw-ring-[#FFCC00]">
                                    <i className="fa-solid fa-globe"></i>English
                                    <ChevronDownIcon aria-hidden="true" className="tw--mr-1 tw-size-5 tw-text-[#D9D9D9]" /> {/* Using custom gray color */}
                                </MenuButton>

                                <MenuItems
                                    transition
                                    className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-56 tw-origin-top-right tw-divide-y tw-divide-white/10 tw-rounded-md tw-bg-gray-800 tw-outline-1 tw-outline-offset-1 tw-outline-white/10 tw-transition data-[closed]:tw-scale-95 data-[closed]:tw-transform data-[closed]:tw-opacity-0 data-[enter]:tw-duration-100 data-[enter]:tw-ease-out data-[leave]:tw-duration-75 data-[leave]:tw-ease-in"
                                >
                                    <div className="tw-py-1 tw-bg-white">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="tw-text-darkgray hover:tw-text-dark[#FFCC00] tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-[#D9D9D9]" // Using custom darkgray and gray
                                            >
                                                <i className="fa-solid fa-globe"></i>English
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="tw-text-darkgray hover:tw-text-dark[#FFCC00] tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-[#D9D9D9]" // Using custom darkgray and gray
                                            >
                                                <i className="fa-solid fa-globe"></i>Arabic
                                            </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>

                            {/* Country Selector */}
                            <Menu as="div" className="tw-relative tw-inline-block tw-ms-3">
                                <MenuButton className="tw--me-2.5 tw-inline-flex tw-w-full tw-justify-center tw-gap-x-1.5 tw-bg-transparent tw-px-2.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-[#D9D9D9] hover:tw-text-[#D9D9D9] tw-inset-ring-1 tw-inset-ring-white/5 hover:tw-bg-transparent focus:tw-outline-none focus:tw-ring-[#FFCC00] hover:tw-ring-1 hover:tw-ring-[#FFCC00]">
                                    <div className="tw-w-10">
                                        <img className="tw-h-auto" src={engllish} width={100} alt="India Flag" />
                                    </div>India
                                    <ChevronDownIcon aria-hidden="true" className="tw--mr-1 tw-size-5 tw-text-[#D9D9D9]" /> {/* Using custom gray color */}
                                </MenuButton>

                                <MenuItems
                                    transition
                                    className="tw-absolute tw-right-0 tw-z-10 tw-mt-2 tw-w-56 tw-origin-top-right tw-divide-y tw-divide-white/10 tw-rounded-md tw-bg-gray-800 tw-outline-1 tw-outline-offset-1 tw-outline-white/10 tw-transition data-[closed]:tw-scale-95 data-[closed]:tw-transform data-[closed]:tw-opacity-0 data-[enter]:tw-duration-100 data-[enter]:tw-ease-out data-[leave]:tw-duration-75 data-[leave]:tw-ease-in"
                                >
                                    <div className="tw-py-1 tw-bg-white">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="hover:tw-text-dark[#FFCC00] tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-[#D9D9D9]" // Using custom darkgray and gray
                                            >
                                                <div className="tw-w-10">
                                                    <img className="tw-h-auto tw-inline-block tw-mr-2" src={engllish} width={100} alt="India Flag" />
                                                </div>India
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="hover:tw-text-dark[#FFCC00] tw-block tw-px-4 tw-py-2 tw-text-sm tw-text-[#D9D9D9]" // Using custom darkgray and gray
                                            >
                                                <div className="tw-w-10">
                                                    <img className="tw-h-auto tw-inline-block tw-mr-2" src={arabic} width={100} alt="Egypt Flag" />
                                                </div>Egypt
                                            </a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright and legal links */}
                <div className="tw-bg-[#131921]"> {/* Using custom darkgray color */}
                    <div className="tw-mx-auto tw-w-full tw-max-w-screen-xl">
                        <div className="tw-px-4 tw-py-6 tw-text-[#D9D9D9] tw-gap-3 tw-text-center"> {/* Using custom gray color */}
                            Conditons of Use & Sale
                            Privacy Notice
                            Interset-Based Ads
                            <span className="tw-text-sm tw-text-[#D9D9D9] sm:tw-text-center">1996-2024, Amazon.com, Inc. or its affiliates</span> {/* Using custom gray color */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}


// [#FFCC00] #c49d05ff
