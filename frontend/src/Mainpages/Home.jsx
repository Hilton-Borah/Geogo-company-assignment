import React, { useEffect, useState } from 'react'
import MovieCard from '../componants/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../Redux/AppReducer/action';
import { Link, useSearchParams } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Home = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const [page, setPage] = useState(Number(searchparams.getAll("page")[0]) || 1)
  const [dis, setDis] = useState(false)
  const dispatch = useDispatch();
  const { isLoading, isError, allMovie } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      allMovie: state.Appreducer.allMovie,
    }
  })

  // pagination----------------------------

  const handlePagePrev = () => {
    if (page === 0) {
      setPage(1)
      setDis(true)
      setSearchparams({ page: page })
    } else {
      setPage(page - 1)
      setSearchparams({ page: page - 1 })
    }
  }

  const handlePageNext = () => {
    console.log("hai")
    setPage(page + 1)
    setSearchparams({ page: page + 1 })
  }


  useEffect(() => {
    dispatch(getAllData(page, 10))
  }, [page])
  return (
    <div className='w-10/12 grid m-auto lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10 mt-36'>
      {
        allMovie && allMovie.map((el) => {
          // console.log(el)
          return (
            <Link to={`/${el.Title}/details/${el._id}`}>
              <MovieCard id={el._id} Title={el.Title} Poster={el.Poster} Genre={el.Genre} Year={el.Year} />
            </Link>
          )
        })
      }

      <div className='flex justify-center items-center m-auto gap-5 mt-10 border'>
        {
          page === 1 ? null : <button onClick={handlePagePrev} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold'>Prev</button>
        }
        <p className='text-black flex justify-center items-center gap-3'><IoIosArrowBack /> {page} <IoIosArrowForward /></p>
        <button disabled={allMovie.length < 10} onClick={handlePageNext} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default Home
