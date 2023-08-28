import React, { useEffect, useState } from 'react'
import MovieCard from '../componants/MovieCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, getAllSearchData } from '../Redux/AppReducer/action';
import { Link, useSearchParams } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineSearch } from "react-icons/ai"


const Home = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const [text, setText] = useState(searchparams.get("q") || "")
  const [page, setPage] = useState(Number(searchparams.getAll("page")[0]) || 1);
  const [filter,setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [dis, setDis] = useState(false)
  const dispatch = useDispatch();
  const { isLoading, isError, allMovie, allMovieSearch } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      allMovie: state.Appreducer.allMovie,
      allMovieSearch: state.Appreducer.allMovieSearch
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


  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(text)
  }


  const handleSelectChangeFilter=(e)=>{
    setFilter(e.target.value)
  }


  const handleSelectChangeSort=(e)=>{
    setSort(e.target.value)
  }



  useEffect(() => {
    dispatch(getAllSearchData(text))
    if (text !== "") {
      setSearchparams({ q: text })
    } else {
      setSearchparams("")
    }
  }, [text])

  
  useEffect(() => {
    dispatch(getAllData(page, 10,filter))
  }, [sort,page,filter]);


  if (sort==="older"){
    allMovie.sort(function (a, b) {
      return a.Year - b.Year
    })
  } else if (sort==="newer"){
    allMovie.sort(function (a, b) {
      return b.Year - a.Year
    })
  } else if (sort==="high"){
    allMovie.sort(function (a, b) {
      return a.imdbRating - b.imdbRating
    })
  } else if (sort==="low"){
    allMovie.sort(function (a, b) {
      return b.imdbRating - a.imdbRating
    })
  }
 
  console.log(allMovieSearch)
  return (
    <div>
      <div className='w-10/12  mt-36 mb-12 m-auto gap-5'>
        <input type="search" className='w-full md:w-1/2 lg:w-1/2 rounded-lg ring-0' value={searchparams.get("q")} onChange={handleChange} placeholder={"What you want to see ......."} />
        {
          text === "" ? null : <div className={`bg-white absolute left-96 z-10 overflow-scroll w-full md:w-1/2 lg:w-1/2 m-auto border rounded-lg ${allMovieSearch.length === 0 ? 'h-12' : 'h-48'}`}>
            {
              allMovieSearch.length === 0 ? <div className='w-full flex justify-center items-center m-auto gap-2 p-2'>
                <AiOutlineSearch />
                <p className='text-md'>No results found</p>
              </div> : null
            }
            {
              allMovieSearch.map((el) => {
                return (
                  <Link to={`/${el.Title}/details/${el._id}`}><div key={el._id} className='flex justify-evenly items-center m-auto pl-5 pr-5 border-b'>
                    <div className='w-1/4 p-3'>

                      <img src={el.Poster} className='w-11/12 h-11/12 rounded-md' alt="" />
                    </div>
                    <div className='w-1/2 text-start'>
                      <p className='text-sm md:text-md lg:text-xl font-bold'>{el.Title}</p>
                      <p className='hidden md:block text-md md:text-md lg:text-md mt-1 font-semibold'>{el.Plot}</p>
                      <p className='text-sm mt-1'>{el.Genre}</p>
                    </div>
                    <p className='w-1/4'>{el.Year}</p>
                  </div></Link>
                )
              })
            }
          </div>
        }
      </div>
      
      <div className='w-11/12 flex justify-end items-center gap-5 mb-12'>
        <div>
          <select className='rounded-md' name="" id="" onChange={handleSelectChangeFilter}>
          <option value="">Filter by</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="biography">Biography</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
        <div>
          <select className='rounded-md' name="" id="" onChange={handleSelectChangeSort}>
          <option value="">Sort by</option>
            <option value="older">Older first</option>
            <option value="newer">Newer first</option>
            <option value="low">Highest rating</option>
            <option value="high">Lowest rating</option>
          </select>
        </div>
      </div>
      <div className='w-10/12 grid m-auto lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10'>
        {
          allMovie && allMovie.map((el) => {
            // console.log(el)
            return (
              <Link to={`/${el.Title}/details/${el._id}`}>
                <MovieCard id={el._id} Title={el.Title} imdbRating={el.imdbRating} Poster={el.Poster} Genre={el.Genre} Year={el.Year} />
              </Link>
            )
          })
        }

      </div>
      <hr className='w-11/12 border-2 m-auto mt-10' />
      <div className='w-10/12 flex justify-center items-center m-auto gap-5 mt-10 mb-10'>
        {
          page === 1 ? null : <button onClick={handlePagePrev} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold'>Prev</button>
        }
        <p className='text-black flex justify-center items-center gap-3'><IoIosArrowBack /> {page} <IoIosArrowForward /></p>
        <button disabled={allMovie.length <= 10} onClick={handlePageNext} className='p-1 pl-8 pr-8 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default Home
