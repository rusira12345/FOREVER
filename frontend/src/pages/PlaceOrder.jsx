import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300'>
        {/*------------left side--------- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                        <Title text1={'DELIVERY'} text2={"INFORMATION"}/>
                </div>
                <div className='flex gap-3'>
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="First name" type="text" />
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Last name" type="text" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Email Address" type="email" />
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Street" type="text" />
                <div className='flex gap-3'>
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="City" type="text" />
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="State" type="text" />
                </div>
                <div className='flex gap-3'>
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Zipcode" type="number" />
                      <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Country" type="text" />
                </div>
                <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder="Phone" type="number" />
        </div>
        {/*----Rightside ----- */}
        <div className='mt-8'>
              <div className='mt-8 min-w-80'>
                  <CartTotal/>
              </div>
              <div className='mt-12'>
                    <Title text={"PAYMENT"} text2={"METHOD"}/>
                    {/*--payment method selection----- */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                            <div className='flex items-center gap-3 border border-gray-300  p-2 px-3 cursor-pointer'>
                              <p></p>
                            </div>  
                    </div>
              </div>
        </div>
    </div>
  )
}

export default PlaceOrder
