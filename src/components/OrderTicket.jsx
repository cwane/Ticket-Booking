import React from 'react'

import { IoCalendarNumber } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { FaMinusSquare } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

const OrderTicket = ({ info, quantity, setQuantity, basePrice, submitHandler }) => {

  return (
    <div className='text-white bg-[#1C1C24] px-4 py-6 w-96 flex flex-col gap-4 border-[2px] rounded-lg border-[#252D3C]'>
        <h1 className='text-xl font-semibold pb-4 border-b-[2px] border-[#252D3C]'>Event Details</h1>
        
        <div className='flex flex-row items-center gap-4 pb-4 border-b-[2px] border-[#252D3C]'>
            <div className=''>
              <IoCalendarNumber className='text-2xl'/>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-[#97ABC0]'>Date and Time</p>
              <p className='font-semibold'>{info.Released}</p>
            </div>
        </div>

        <div className='flex flex-row items-center gap-4 pb-4 border-b-[2px] border-[#252D3C]'>
            <div>
              <HiLocationMarker className='text-2xl'/>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-[#97ABC0]'>Location</p>
              <p className='font-semibold'>{info.Country}</p>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
          
          <h1 className='font-semibold text-xl'>Select Tickets</h1>
          
          <div className='flex flex-row justify-between items-center px-4'>
            <div>
              <p className='text-base text-[#97ABC0]'>1x Ticket(s)</p>
              <h1 className='text-2xl font-bold'>USD ${basePrice}.00</h1>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <FaMinusSquare className='text-2xl cursor-pointer' onClick={() => setQuantity(prev => prev>1 ? prev-1 : prev)}/>
              <p className='text-semibold text-2xl'>{quantity}</p>
              <FaPlusSquare className='text-2xl cursor-pointer' onClick={() => setQuantity(prev => prev + 1)}/>
            </div>
          </div>

          <button className='hover:bg-[#2e3646] text-white text-base font-semibold px-8 py-4 bg-[#E14658] rounded-xl'
            onClick={() => submitHandler() }>Checkout for ${quantity * basePrice}.00</button>
        </div>
    </div>
  )
}

export default OrderTicket