import { Link, useNavigate } from 'react-router-dom';
import { saveLocalData } from '../Utils/LocalStorage';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../Redux/Authreducer/action';


const initialState = {
  email: "",
  password: ""
}



const LoginUser = () => {
  const [text, setText] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {usermessage, isLoading, isError } = useSelector((state) => {
    return {
      usermessage: state.Authreducer.usermessage,
      isLoading: state.Authreducer.isLoading,
      isError: state.Authreducer.isError
    }
  });

  const { password, email } = text;

  const handleChange = (e) => {
    const { value,name } = e.target;
    setText({ ...text, [name]: value })
  }



  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getLogin(text))
    .then((res)=>{
      console.log(res)
      if (res && res.payload && res.payload.message==="Login Successfully"){
        alert("Login Successfully");
        saveLocalData("token",res.payload.token)
        saveLocalData("username",res.payload.user.name)
        saveLocalData("userID",res.payload.user._id)
      } else {
        alert("Wrong credentials")
      }
    })
  }


  return (
    <div>
      {/* <p className='text-5xl text-center mt-10 font-semibold'>Welcome to Mobilicis</p> */}
      {/* <p className='text-1xl text-center m-5 mb-5 font-semibold'>Please login your account to proceed further</p> */}
      <div className='w-5/6 border rounded-xl shadow-xl m-auto flex flex-col justify-center items-center mt-36 md:flex-row p-10'>
        <div className='w-full md:w-1/2 border-r-2'>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="" />
        </div>
        <hr className='border-2 border-gray'/>
        <div className='w-full md:w-1/2 mt-10'>
          {/* <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="text" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleChange}>Add</button> */}

          {/* <form action="" onSubmit={handleClick}> */}
          <div class="sm:col-span- w-3/4 m-auto">
            <label for="email" class="text-start block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input className='' id="email" name="email" value={email} type="email" onChange={handleChange} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="sm:col-span-4 mt-5 w-3/4 m-auto">
            <label className='text-start' for="password" class="text-start block text-sm font-medium leading-6 text-gray-900"> Password</label>
            <div class="mt-2">
              <input type="password" name="password" value={password} onChange={handleChange} id="password" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className='text-center mt-3 mb-3'>
            Donot have an account? <Link to={"/register"}><b className='border-b-2 border-black'>Register</b></Link>
          </div>
          <div class="mt-4 flex items-center justify-center gap-x-6 mb-10">
            <button onClick={handleClick} class="p-2 pl-10 pr-10 bg-blue rounded-md text-white hover:bg-white hover:text-blue border-2 border-blue font-semibold">Login</button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default LoginUser
