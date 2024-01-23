import React from 'react';
import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import Child1 from './Child1';
import Child2 from './Child2';
import { Outlet } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const TempData = {
    Name: "kiran"
  };

  return (
    <div className='text-center'>
      <input type='text' placeholder='Enter a message' className='border-2 border-gray-800 rounded-full m-6' />
      <br />
      <button className='bg-green-700 p-2 rounded w-24 text-white' onClick={() => { navigate('/contact', { state: TempData }) }}>
        Go Back
      </button>


      <div className=' mt-10 mx-5'>
        <button className='bg-black p-2 m-3 rounded'><Link className='text-white no-underline' to="child1">Child1</Link></button>
        <button className='bg-black p-2 m-3 rounded'><Link className='text-white no-underline' to="child2">Child2</Link></button>

      </div>
      <Outlet />

    </div>
  );
}

export default About;
