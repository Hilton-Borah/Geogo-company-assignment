import { Link, useNavigate } from 'react-router-dom';
import { saveLocalData } from '../Utils/LocalStorage';

import React, { useState } from 'react'
// import PinInput from '../componants/Pininput';
import { useDispatch, useSelector } from 'react-redux';
import { getRegistration } from '../Redux/Authreducer/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../componants/Footer';

const initialState = {
  name: "",
  email: "",
  password: ""
}

const Register = () => {
  const [text, setText] = useState(initialState);
  const navigate = useNavigate();
  // const [searchparam, setSearchparams] = useState()
  // console.log(searchparam.getAll("pin")[0])
  // const [pin, setPin] = useState(false)
  const dispatch = useDispatch()
  const { usermessage, isLoading, isError } = useSelector((state) => {
    return {
      usermessage: state.Authreducer.usermessage,
      isLoading: state.Authreducer.isLoading,
      isError: state.Authreducer.isError
    }
  });

  const { name, password, email } = text;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getRegistration(text))
      .then((res) => {
        console.log(res.payload.success)
        if (res.payload.success === "Your account created successfully") {
          toast.success(res.payload.success);
          navigate("/login")
        } else {
          toast.success("Something went wrong");
        }
      }).catch((err) => {
        console.log(err)
      })
  }


  return (
    <div>
      {/* <p className='text-5xl text-center mt-10 font-semibold'>Welcome to Mobilicis</p> */}
      {/* <p className='text-1xl text-center m-5 mb-5 font-semibold'>Please login your account to proceed further</p> */}
      <div className='w-5/6 border rounded-xl shadow-xl m-auto flex flex-col justify-center items-center mt-36 md:flex-row p-10  mb-12'>
        <div className='w-full md:w-1/2 border-r-2'>
          <img className='w-10/12' src="https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/51a2e35a-321d-4a75-86e9-2657a856b10b" alt="" />
        </div>
        <hr className='border-2 border-gray' />
        <form className='w-full md:w-1/2 mt-10' onSubmit={handleClick}>
          {/* <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleChange}>Add</button> */}

          {/* <form action="" onSubmit={handleClick}> */}




          <div class="sm:col-span- w-3/4 m-auto">
            <label for="email" class="text-start block text-sm font-medium leading-6 text-gray-900">Email address*</label>
            <div class="mt-2">
              <input className='' id="email" name="email" value={email} type="email" onChange={handleChange} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4 mt-5 w-3/4 m-auto">
            <label className='text-start' for="password" class="text-start block text-sm font-medium leading-6 text-gray-900"> Name*</label>
            <div class="mt-2">
              <input type="text" name="name" value={name} onChange={handleChange} id="password" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4 mt-5 w-3/4 m-auto">
            <label className='text-start' for="password" class="text-start block text-sm font-medium leading-6 text-gray-900"> Password*</label>
            <div class="mt-2">
              <input type="password" name="password" value={password} onChange={handleChange} id="password" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className='text-center mt-3 mb-3'>
            Already have an account? <Link to={"/login"}><b className='border-b-2 border-black'>Login</b></Link>
          </div>

          <div class="mt-4 flex items-center justify-center gap-x-6 mb-10">
            <button type="submit" className="p-2 pl-10 pr-10 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold">
              {
                isLoading ? <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue"></div>
                </div> : "Register"
              }
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
