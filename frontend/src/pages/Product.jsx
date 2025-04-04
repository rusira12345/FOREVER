import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from "../context/ShopContext"
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
  const {productID} = useParams();
  const {products,currency} = useContext(ShopContext)
  const [image,setimage] = useState("");
  const [productData,setProductData] = useState(false);
  const [size,setSize] = useState("");
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
                    {
                      productData.image.map((image,index)=>(
                        <img onClick={()=>setimage(image)} src={image} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
                      ))
                    }
              </div>
              <div className='w-full sm:w-[80%]'>
                      <img src={image} className="w-full h-auto" alt=''/>
              </div>
        </div>
        {/*---Product Info-------*/}
        <div className='flex-1'>
               <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>   
               <div className='flex item-center gap-1 mt-2'>
                    <img src={assets.star_icon} alt="" className="w-5" />
                    <img src={assets.star_icon} alt="" className="w-5" />
                    <img src={assets.star_icon} alt="" className="w-5" />
                    <img src={assets.star_icon} alt="" className="w-5" />
                    <img src={assets.star_dull_icon} alt="" className="w-5" />
                    <p className='pl-2'>(122)</p>
                </div>  
                <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                      <p>Select Size</p>
                      <div className='flex gap-2'>
                        {productData.sizes.map((item,index)=>(
                            <button onClick={()=>setSize(item)}className={`border py-2 px-4 bg-gray-100 ${size===item?'border-orange-500':''}`} key={index}>{item}</button>
                        ))}
                      </div>
                </div>
                <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                 <hr className='mt-8 sm:w-4/5 border-t-1 border-gray-300'/>   
                 <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is avilable on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                  </div>    
        </div>
      </div>
      {/*----Description & Review Section------------------ */}
      <div className='mt-20'>
        <div className='flex'>
                <b className='border px-5 py-3 text-sm border-gray-300'>Description</b>
                <p className='border px-5 py-3 text-sm border-gray-300'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur, neque minima deserunt odio sit dignissimos reprehenderit repudiandae dolores adipisci minus totam ab eius dolorem quae nesciunt iusto magnam quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id quia, eum, iure ipsam earum consectetur quas neque suscipit debitis fugiat odio accusantium illum, deserunt quod totam laboriosam minus qui?</p>
        </div>
      </div>
      <div>
                      {/*---Display related products------*/}
                      <RelatedProducts category={productData.category} subcategory={productData.subCategory}/>
      </div>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
