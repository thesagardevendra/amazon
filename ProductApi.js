import React, { useEffect, useState } from 'react'
import Products from './Products';

const ProductApi = () => {
    // const products=await fetch("https://fakestoreapi.com/products").then((res)=>res.json());
   
    return (
        <div>
            <Products />
        </div>
    )
}

export default ProductApi
