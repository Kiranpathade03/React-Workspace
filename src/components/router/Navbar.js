import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div> 
        <nav className='flex  bg-orange-300 p-3 gap-3 justify-end'>
          <Link to="/"  className='text-black no-underline' >Home</Link>
          <Link to="/about" className='text-black no-underline'>About</Link>
          <Link to="contact" className='text-black no-underline' >Contact Us</Link>
        </nav>
    </div>
  )
}

export default Navbar