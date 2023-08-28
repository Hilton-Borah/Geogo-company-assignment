import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishlistData, getWishlistData } from '../Redux/AppReducer/action';
import { getLocalData } from '../Utils/LocalStorage';
import MovieCard from '../componants/MovieCard';
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiTwotoneHeart } from 'react-icons/ai';
import Footer from '../componants/Footer';

const Wishlist = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(getLocalData("userID"))
  let { isLoading, isError, movieDetails, wishlist } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      movieDetails: state.Appreducer.movieDetails,
      wishlist: state.Appreducer.wishlist
    }
  })

  useEffect(() => {
    dispatch(getWishlistData)
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteWishlistData(id))
    setTimeout(() => {
      dispatch(getWishlistData)
    }, 1000);
  }

  const moviewishlistAll = wishlist && wishlist.filter((prop) => prop.userID === id);

  console.log(moviewishlistAll)
  return (
    <div>
      <p className='w-10/12 text-center mt-36 text-xl md:text-xl lg:text-2xl font-semibold flex justify=-center items-center m-auto gap-3'>Your wishlist Movies<AiTwotoneHeart/></p>
      {
        moviewishlistAll.length === 0 ? <div className='w-10/12 mt-12  border-2 rounded-xl p-5 m-auto mb-24'>
          <p className=' text-sm md:text-md lg:text-xl font-semibold mt-5'>Your wishlist is empty.</p>
          <img className='w-3/5 md:w-2/5 lg:w-1/5 m-auto' src="https://img.freepik.com/premium-vector/wishlist_203633-574.jpg?w=2000" alt="" />
        </div> : <div className='w-10/12 grid m-auto border rounded-xl p-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10 mt-12 mb-24'>
          {
            moviewishlistAll && moviewishlistAll.map((el) => {
              return (
                // <Link to={`/${el.Title}/details/${el._id}`}>
                <div id={el._id}>
                  {
                    isLoading ?  <div className="flex items-center justify-center mt-36 mb-36">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue"></div>
                  </div> : <div>
                    <MovieCard Title={el.Title} Poster={el.Poster} Year={el.Year} Genre={el.Genre} />
                    {
                      isLoading ? <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-red"></div>
                      </div> : <button onClick={() => handleDelete(el._id)} className='w-full flex justify-center items-center gap-1 rounded text-red hover:bg-red hover:text-white border-red border p-1 pl-2 pr-2 text-sm'>
                        <AiOutlineDelete />
                        <span>Delete</span>
                      </button>
                    }
                  </div>
                  }
                </div>
                // </Link>
              )
            })
          }
        </div>
      }

<Footer/>
    </div>

  )
}

export default Wishlist
