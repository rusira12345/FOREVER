import React, { useEffect, useState } from 'react'
import {products} from "../assets/frontend_assets/assets"
import { createContext } from 'react'
import { toast } from 'react-toastify'
export const ShopContext  = createContext()
const ShopContextProvider = (props) =>{
    const currency = "Rs "
    const delivery_fee = 10
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    
    
    const addToCart = async(itemId,Size) =>{
        {/*structured clone create a copy of the obejct sice cartItems is a object i use structured clone to
            to get a copy of this object*/}
            let cartData = structuredClone(cartItems);
            if(!Size)
            {
                toast.error('Select Product Size');
                return;
            }
            if(cartData[itemId])
            {
                if(cartData[itemId][Size])
                {
                    cartData[itemId][Size] += 1
                }
                else
                {
                    cartData[itemId][Size] = 1;
                }
            }
            else
            {
                cartData[itemId] = {}
                cartData[itemId][Size] = 1
            }
            setCartItems(cartData)
    }
    const getCardCount = () =>{
        let totalCount = 0;
        for(const items in cartItems)
        {
            for(const item in cartItems[items])
            {
                    try{
                        if(cartItems[items][item]>0)
                        {
                            totalCount= totalCount + cartItems[items][item]
                        }
                    }catch(error)
                    {

                    }
            }
        }
        return totalCount
    }
    const updateQuantity = async(itemId,Size,quantity) =>{
            let cartData = structuredClone(cartItems);
            cartData[itemId][Size] = quantity;
            setCartItems(cartData)
    }
    const value = {
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCardCount,updateQuantity
    }
    return(
        <ShopContext.Provider value={value}>
                {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider