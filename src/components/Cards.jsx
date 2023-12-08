import React from 'react';
import { useNavigate } from 'react-router-dom'
const Cards = ({info}) => {
  const navigate = useNavigate();
  return (
    <div className='w-64 flex flex-col gap-2 relative cursor-pointer'  onClick={() => {navigate(`/eventdetails/${info.imdbID}`)}} >
        <div>
            <img className='rounded-xl' src={info.Poster} alt="" />
        </div>
        <div className='space-y-2 text-white'>
            <h1 className='text-lg font-bold'>{info.Title}</h1>
            <p className='text-sm font-semibold'>{info.Released} • {info.Country}</p>
        </div>
        <p className='absolute top-2 right-2 bg-[#22252CCC] bg-opacity-80 text-white px-2 py-1 rounded-md'>{info.Type}</p>
    </div> 
  );
}

export default Cards;
