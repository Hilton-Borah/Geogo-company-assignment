import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getAllDataDetails } from '../Redux/AppReducer/action';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, movieDetails } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      movieDetails: state.Appreducer.movieDetails,
    }
  })

  useEffect(() => {
    dispatch(getAllDataDetails(id))
  }, [])

  console.log(movieDetails)
  return (
    <div>
      {
        movieDetails && movieDetails.message && <div className='md:flex justify-between items-center w-11/12 m-auto mt-24 border rounded-xl'>
          <div className='md:w-1/4 sm:w-full p-5 md:shrink-0'>
            <img className='w-11/12 m-auto rounded-xl' src={movieDetails.message.Poster} alt="" />
            <hr className='border-2 bg-gray mt-5' />
            <div className='flex justify-between items-center mt-5'>
              <button className='text-green border-2 border-green font-semibold p-1 pl-3 pr-3 rounded-md hover:text-white hover:bg-green'>Trailer</button>
              <button className='text-blue border-2 border-blue font-semibold p-1 pl-3 pr-3 rounded-md hover:text-white hover:bg-blue'>+ Add to wishlist</button>
            </div>
          </div>
          <div className='w-3/4 text-start p-4 leading-loose'>
            <p className='text-3xl font-bold mb-5'>{movieDetails.message.Title}</p>
            <p className='w-24 text-white rounded-md pl-4 pr-4 border bg-green mb-3'>Released</p>
            <p>{movieDetails.message.Plot}</p>
            <p><span className='font-semibold'>Rating :</span> {movieDetails.message.imdbRating}</p>
            <p><span className='font-semibold'>Duration:</span> {movieDetails.message.Runtime}</p>
            <p><span className='font-semibold'>Released :</span> {movieDetails.message.Released}</p>
            <p><span className='font-semibold'>Cast :</span> {movieDetails.message.Actors}</p>
            <p><span className='font-semibold'>Awards :</span> {movieDetails.message.Awards}</p>
            <p><span className='font-semibold'>Director :</span> {movieDetails.message.Director}</p>
            <p><span className='font-semibold'>Genre :</span> {movieDetails.message.Genre}</p>
            <p><span className='font-semibold'>Language :</span> {movieDetails.message.Language}</p>
            <p><span className='font-semibold'>Production :</span> {movieDetails.message.Production}</p>
            <p><span className='font-semibold'>Writer :</span> {movieDetails.message.Writer}</p>
            <p><span className='font-semibold'>Country :</span> {movieDetails.message.Country}</p>
            {/* <p>{movieDetails.message.Year}</p> */}
            {/* <p></p>
        <p></p>
        <p>Duration:Duration</p> */}
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetails
