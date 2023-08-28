import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLocalData } from '../Utils/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({isOpen,toggleNavbar}) => {
  const [text,setText] = useState("");
  const navigate = useNavigate()
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };


  const handleChange=(e)=>{
    setText(e.target.value)
  }

  useEffect(()=>{
    if (text==="login"){
      navigate("/login")
    } else if (text==="register"){
      navigate("/register")
    } 
    else if (text==="logout"){
      localStorage.clear();
      window.location.reload();
    }
  },[text,setText])

  const handleClick=()=>{
    if (!getLocalData("token")){
      toast.error('You are not login, Login first');
    }
  }

  const handleClick1=()=>{
    if (!getLocalData("token")){
      toast.error('You are not login, Login first');
    }
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }

  return (
    <nav className="bg-gray-800 w-full fixed top-0">
      <div className="w-navbar mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
           <Link to={"/"}><img className='w-24' src="https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/1a813db6-48a1-430b-8600-0604b7092076" alt="" />
           </Link> </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to={getLocalData("token") ? "/moviecontrol" : "/login"} onClick={handleClick} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</Link>
            <a href={getLocalData("token") ? "/wishlist" : "/login"} onClick={handleClick1} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</a>
            <select onChange={handleChange} className="cursor-pointer text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-gray-800 outline-none">
              <option value="">{getLocalData("username")?<p className='cursor-pointer '>Hi, {getLocalData("username")}</p> : "My account"}</option>
              <option value="login" className='cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Login
              </option>
              <option value="register" className='cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Register
              </option>
              {getLocalData("username") ?  <option value="logout" className='cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Logout
              </option> : null}
             
            </select>
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
        <div className="md:hidden  border-t-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to={getLocalData("token") ? "/moviecontrol" : "/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Movie control</Link>
            <a  href={getLocalData("token") ? "/wishlist" : "/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Wishlist</a>
            <select onChange={handleChange} className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-gray-800 outline-none m-auto">
              <option value="">{getLocalData("username")?<p>Hi, {getLocalData("username")}</p> : "My account"}</option>
              <option value="login" className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Login
              </option>
              <option value="register" className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Register
              </option>
              {getLocalData("username") ?  <option value="logout" className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Logout
              </option> : null}
             
            </select>
          </div>
        </div>
      )}
      <ToastContainer/>
    </nav>
  );
};

export default Navbar;
