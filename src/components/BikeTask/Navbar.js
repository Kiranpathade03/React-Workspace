import React from 'react'
import logo from '../assets/BikeTask/logo.png'

function Navbar() {
  return (
    <div className='bg-blue-900 h-14'>
        <nav className='flex justify-between mx-10 '>
          <img className='w-32 h-12 ' src={logo}/>
          <ul className='text-white  mt-3 flex space-x-5'>
            <li>How it Works ?</li>
            <li>Club</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Feedback</li>
            <button className='text-blue-950 bg-white p-1 rounded'>LogIn / Signup</button>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar       