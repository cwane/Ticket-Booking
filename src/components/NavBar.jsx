import React from 'react'

import { IoTicket } from "react-icons/io5";

const NavBar = () => {

  return (
    <header className='py-4 bg-[#252D3C] text-white '>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            <nav className='flex flex-row items-center gap-16'>
                <div className='flex flex-row items-center gap-4'>
                    <IoTicket className='text-4xl'/>
                    <p className='text-3xl font-bold'>Ticket</p>
                </div>
                <ul className='flex flex-row gap-4 font-bold text-md'>
                    <li className='cursor-pointer'><a href="/">Home</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Movies</a></li>
                    {/* <li><a href="#">Theater Events</a></li> */}
                </ul>
            </nav>
            <div className='space-x-8 font-bold'>
                <button>Login</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Register</button>
            </div>
        </div>
    </header>
  )
}

export default NavBar