import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

function Child1() {

    const Navigate = useNavigate();
    const [data, setData] = useState([]);
    const location= useLocation()

console.log(location);
    return (
        <div className='border p-2 mt-7  md:w-[50%]  md:ml-[25%]'>
           <p>{location.state.name}</p>
           <p>{location.state.rollNo}</p>
            <button className='bg-black text-white p-2 w-42 rounded hover:bg-green-700 ' onClick={() => { Navigate('/about/child2', { state: data }) }}>Send to Child2</button>
        </div>
    )
}

export default Child1