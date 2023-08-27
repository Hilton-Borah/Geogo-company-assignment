import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalData } from '../Utils/LocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlistData } from '../Redux/AppReducer/action';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="bg-gray-800 w-full fixed top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Logo</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</Link>
            <Link to="/moviecontrol" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</Link>
            <Link to="/wishlist" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{getLocalData("username")?<p>Hi, {getLocalData("username")}</p> : "My account"}</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            <Link to="/moviecontrol" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</Link>
            <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Register</Link>
            <Link to="/wishlist" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
