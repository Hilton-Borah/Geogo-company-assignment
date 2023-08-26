import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Ragister from './Ragister'
import MovieDetails from './MovieDetails'
import Wishlist from './Wishlist'
import MovieControl from './MovieControl'


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path='/register' element={<Ragister/>}/>
        <Route path={"/:movie/details/:id"} element={<MovieDetails/>}/>
        <Route path={"/moviecontrol"} element={<MovieControl/>}/>
        <Route path={"/wishlist"} element={<Wishlist/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
