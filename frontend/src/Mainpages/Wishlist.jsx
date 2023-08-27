import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistData } from '../Redux/AppReducer/action';
import { getLocalData } from '../Utils/LocalStorage';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, movieDetails,wishlist } = useSelector((state) => {
    return {
      isLoading: state.Appreducer.isLoading,
      idError: state.Appreducer.idError,
      movieDetails: state.Appreducer.movieDetails,
      wishlist: state.Appreducer.wishlist
    }
  })

  useEffect(()=>{
    dispatch(getWishlistData)
  },[])

  const alldatawishlist = wishlist && wishlist.filter((el)=>getLocalData("userID")===el.userID)

  console.log(alldatawishlist)
  return (
    <div>
      
    </div>
  )
}

export default Wishlist
