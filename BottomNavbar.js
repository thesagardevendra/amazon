import React from 'react';
import app from "./app.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBars} from "@fortawesome/free-solid-svg-icons";

const BottomNavbar = () => {
    return (
     
    <div className="flex space-x-3  items-center justify-between bg-amazonblue-light ">
            {/* Bottom Navbar */}
    <div className="flex space-x-3  items-center">
       <div className="flex items-center ml-2 text-gray-100 space-x-1">
          <FontAwesomeIcon icon={faBars} />
          <p className="text-sm font-semibold">All</p>
      </div>
      <p className="text-sm font-semibold  whitespace-nowrap text-gray-100">Mobiles</p>
      <p className="text-sm font-semibold  whitespace-nowrap text-gray-100">Best Sellers</p>
      <p className="text-sm font-semibold  whitespace-nowrap text-gray-100">Electronics</p>
      <p className="text-sm font-semibold  whitespace-nowrap hidden md:block  text-gray-100">Customer Service</p>
      <p className="text-sm font-semibold  whitespace-nowrap hidden md:block text-gray-100">Fashion</p>
      <p className="text-sm font-semibold  whitespace-nowrap hidden md:block text-gray-100">Home & Kitchen</p>
      <p className="text-sm font-semibold  whitespace-nowrap hidden md:block text-gray-100">Amazon Pay</p>
    </div>
   <div className="flex items-center">
       <img src={app} width={60} /> 
       <p className="text-sm hidden font-normal lg:block text-white mr-5 whitespace-nowrap">Shopping made easy | Download the App</p>
   </div>
</div>
    )
}

export default BottomNavbar
