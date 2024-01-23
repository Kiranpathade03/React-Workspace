import React from 'react'
import { useLocation, useNavigate } from 'react-router'


function Child2() {
    const location = useLocation();
    console.log(location.state);

    const Navigate = useNavigate();
    // const data = " Bundling your code for the server and the browser Not bundling server-only code into the browser bundles Code splitting that works on the server and in the browser Server Side data loading so you actually have something to renderData loading strategies that work on the client and server";
  const data ={
    name:"kiran",
    rollNo:2224
  }
    return (
        <div className='border p-2 mt-7  md:w-[50%]  md:ml-[25%]'>
            {/* <p className=' text-red-900'>{location.state}</p> */}
            <p>
                Bundling your code for the server and the browser
                Not bundling server-only code into the browser bundles
                Code splitting that works on the server and in the browser
                Server Side data loading so you actually have something to render
                Data loading strategies that work on the client and server
                Handling code splitting in the server and client
                Proper HTTP status codes and redirects
                Environment variables and secrets
                Deployment
            </p>
            <button className='bg-black text-white p-2 w-42 rounded text-center' onClick={() => { Navigate('/about/child1', { state: data }) }}>Send to Child1 </button>
        </div>
    )
}

export default Child2