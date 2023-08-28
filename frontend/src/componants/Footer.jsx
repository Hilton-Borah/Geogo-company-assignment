import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
           <Link to={"/"}><img className='w-24 m-auto mt-5 mb-5' src="https://github.com/Hilton-Borah/dummyImageforUrbanGuys/assets/103739534/1a813db6-48a1-430b-8600-0604b7092076" alt="" /></Link>

      <p>&copy; 2023 GEOGO MOVIES. All rights reserved.</p>
    </footer>
  )
}

export default Footer
