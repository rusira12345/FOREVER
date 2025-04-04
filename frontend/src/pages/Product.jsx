import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from "../context/ShopContext"
const Product = () => {
  const {productID} = useParams();
  const {products} = useContext(ShopContext)
  const [image,setimage] = useState("");
  const [productData,setProductData] = useState(false);
  const fetchProductData = async() =>{
        products.map((item)=>{
              if(item._id === productID)
              {
                setProductData(item);
                setimage(item.image[0])
                return null;
              }
  })
  }
  useEffect(()=>{
      fetchProductData();
  },[productID,products])
  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

              </div>
        </div>
      </div>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
