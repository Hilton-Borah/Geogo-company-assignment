import React from 'react'

const MovieCard = ({id,Title,Poster,Genre,Year,imdbRating}) => {
  return (
    <div key={id} className='border rounded-xl hover:border-black'>
      <img className='w-full lg:h-72 sm:96 rounded-t-xl' src={Poster} alt="" />

      <div className='p-2'>
        <p className='text-lg font-semibold'>{ Title.length>18 ? Title.substring(0,18)  + "..." : Title}</p>
        <div className='flex justify-between items-center mt-2 text-sm'>
          <p>{ Genre.length>10 ? Genre.substring(0,10)  + "..." : Genre}</p>
          <p>{imdbRating}</p>
          <p>{Year}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
