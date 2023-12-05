import React from "react";


const NavBar = () => {
  return (
    <div>
      <nav class="bg-[#252D3C] fixed w-full z-20 top-0 start-0 border-b border-[#252D3C] dark:border-[#252D3C] h-80px">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://www.svgrepo.com/svg/107360/movie-tickets/" class="flex items-center space-x-80px rtl:space-x-reverse">
      <img src="https://www.svgrepo.com/show/107360/movie-tickets.svg" class="h-8" alt="Movie Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MovieTime</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-16px rtl:space-x-reverse items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  {/* <li> */}
      <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
      <button 
  type="button" 
  class="text-white bg-[#E14658] hover:bg-[#E14658] focus:ring-4 focus:outline-none focus:ring-[#E14658] font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#E14658] dark:hover:bg-[#E14658] dark:focus:ring-[#E14658]"
>
 Register
</button>


    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> 

   {/* </li> */}
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#252D3C] md:dark:bg-[#252D3C] dark:border-[#252D3C]">
      <li>
      <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Concerts</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Movies</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Theater Events</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;



