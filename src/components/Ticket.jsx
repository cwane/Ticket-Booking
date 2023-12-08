import React from 'react'

import scissor from './../assests/scissors.svg'
import { HiOutlineTicket } from "react-icons/hi";

const Ticket = ({ event, price}) => {
  return (
    <>
        <img src={scissor} alt="Scissor"/>
        <div className='flex flex-row gap-8 items-center border-[1px] p-4 rounded-lg max-w-fit'>
            <img className='h-32 rounded-lg' src={event.Poster} alt="poster" />
            <div>
                <h1 className='text-black font-semibold text-lg'>{event.Title}</h1>
                <p className='text-sm'>{event.Released}</p>
                <p className='flex flex-row items-center gap-2'>
                    <HiOutlineTicket className='text-sm text-[#e14658]'/> <span className='text-sm font-semibold'>x1</span>
                </p>
                <p>Total: <span className='font-semibold text-black'>${price}</span></p>
            </div>
        </div>
    </>
  )
}

export default Ticket