import React, { useEffect, useState } from 'react'
import MovieCard from '../componants/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../Redux/AppReducer/action';
import { Link } from 'react-router-dom';


const Home = () => {
  const [page,setpage] = useState(1)
  const dispatch = useDispatch();
  const { isLoading, isError, allMovie } = useSelector((state) => {
    return {
        isLoading: state.Appreducer.isLoading,
        idError: state.Appreducer.idError,
        allMovie: state.Appreducer.allMovie,
    }
})

const handlePrevButton=()=>{
  
}

useEffect(()=>{
  dispatch(getAllData(page,10))
},[])
  return (
    <div className='w-10/12 grid m-auto lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10 mt-36'>
      {
        allMovie && allMovie.map((el)=>{
          console.log(el)
          return(
            <Link to={`/${el.Title}/details/${el._id}`}>
               <MovieCard id={el._id} Title={el.Title} Poster={el.Poster} Genre={el.Genre} Year={el.Year}/>
            </Link>
          )
        })
      }

      <div>
        <button onClick={handlePrevButton}>Prev</button>
        {/* <button onClick={handleNextButton}>Next</button> */}
      </div>
    </div>
  )
}

export default Home
