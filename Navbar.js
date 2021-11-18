import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import BottomNavbar from './BottomNavbar';

const Navbar = () => {
    return (
<>
   {/* Top Navbar */}
    <div className="flex space-x-3  items-center justify-between  py-1 bg-amazonblue">
             {/* Amazon Logo */}
              <div className="flex justify-center  mx-2">
              <img src="https://links.papareact.com/f90" className="mt-2" width={95}  style={{objectFit:"contain"}} />
              <span className="text-gray-100 font-semibold mt-1 hidden ">.in</span>
              </div>
                 {/* Location  */}
              <div className="flex flex-col text-left  space-x-1 md:inline-flex hidden">
                  <span className="text-gray-400 text-xs ml-5 W">Hello</span>
                  <div className="flex  text-xs space-x-1 items-center text-left text-gray-100">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-100 text-sm " />
                        <span className="font-semibold text-sm whitespace-nowrap">Select your address</span>
                  </div>
                </div>
                {/* Search Box */}
                <div className="flex  items-center sm:flex hidden h-8 flex-grow cursor-pointer rounded bg-yellow-300 ">
                    {/* <p className="bg-gray-400 p-1 px-2 rounded-bl-sm rounded-tl-sm">All</p> */}
                    <input className="  rounded-l flex-grow outline-none p-1 h-full w-6 " type="Search"  />
                 <div className="px-3">
                 <FontAwesomeIcon icon={faSearch} className=" text-gray-900 font-normal " />

                 </div>
                    
                </div>
                {/* Sigin in */}
                <div className="flex space-x-3 items-center">
                <div className="flex flex-col text-gray-100 whitespace-nowrap">
                    <span className="text-xs text-left">Hello, Sign in</span>
                    <span className="text-sm font-semibold">Accounts & Lists</span>
                </div>
                <div className="flex flex-col text-gray-100 whitespace-nowrap">
                    <span className=" text-xs text-left">Returns</span>
                    <span className=" text-sm font-semibold">& Orders</span>
                </div>
                <div className=" flex relative items-center">
                    <div className="">
                    <FontAwesomeIcon icon={faShoppingCart }  className="text-gray-100 text-3xl md:text-3xl rrelative md:m-0 mr-2"/>
                
                <span className="flex items-center justify-center  absolute z-20  top-0 md:right-8 -right-0 mr-1  rounded-full bg-yellow-300 text-xs md:text-xs md:h-4 md:w-4  font-bold h-4 w-4 text-center">0</span>
               
                    </div>
               <span className="text-sm mx-2 font-semibold text-gray-100 mt-2 hidden md:block">Cart</span>
                </div>
                
                </div>
    </div>
  <BottomNavbar />
</>
    )
}

export default Navbar
