import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteWishlistData, getWishlistData } from '../Redux/AppReducer/action';
import { getLocalData } from '../Utils/LocalStorage';
import MovieCard from '../componants/MovieCard';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

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

  const property = wishlist && wishlist.filter((prop) => prop.userID === id);

  console.log(property)
  return (
    <div className='w-10/12 grid m-auto lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-10 mt-36 mb-24'>
      {
        property && property.map((el) => {
          return (
            // <Link to={`/${el.Title}/details/${el._id}`}>
            <div id={el._id}>
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
            // </Link>
          )
        })
      }
    </div>
  )
}

export default Wishlist
