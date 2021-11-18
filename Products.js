import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
         fetch("https://fakestoreapi.com/products" )
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }, [])
    return (
        <div className="flex flex-wrap gap-5  m-5 justify-center">
            {
                product.map((curELe)=>{
                    return (
                        <div className="flex flex-col shadow-lg bg-white border w-56  bg-gray-white rounded-md p-2  border-gray-200  ">
                            <img src={curELe.image}  style={{height:"200px",widht:"200px", objectFit:"contain"}} />
                            <p className="capitalize text-gray-600 text-sm italic">{curELe.category}</p>
                            <p className="text-black text-lg font-semibold  line-clamp-1 ">{curELe.title} </p>
                            <p className="text-xs line-clamp-2 font-semibold">{curELe.description}</p>
                            <p className="font-bold text-red-800">${curELe.price}</p>
                            <p className="flex items-center space-x-2 text-sm font-semibold">{curELe.rating.rate}<FontAwesomeIcon icon={faStar} className="text-yellow-500 ml-1" /></p>
                            <p>Stock Avaliable {curELe.rating.count}</p>
                            <p className="bg-yellow-400 mt-2 rounded font-semibold  text-center">Add to cart</p>

                            </div>


                    )
                })
            }
            
        </div>
    )
}

export default Products
