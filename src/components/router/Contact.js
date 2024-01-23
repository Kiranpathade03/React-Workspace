import React from 'react'
import { Link,Outlet,useLocation } from 'react-router-dom'

function Contact() {
  const location=useLocation();
  console.log("location", location);
  return (
   <>
    <div className=' mt-24 ml-40'>
      <Link className='text-white bg-black p-2 rounded no-underline' to='email' >Email</Link>
      <Link className='text-white bg-black p-2 rounded no-underline m-3' to="phone">Phone No</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Contact