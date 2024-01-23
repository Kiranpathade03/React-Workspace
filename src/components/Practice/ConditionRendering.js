import React, { useState } from 'react'

export default function ConditionRendering() {
    
    const [logedIn , setLoggedIn]=useState(true);
const change=()=>{
    setLoggedIn((prevLoggedIn) => !prevLoggedIn);
}
  return (
    <div> 
        {logedIn?<h1>kiran</h1>:<h1>shubham</h1>}
        <button onClick={change}>Change</button>
    </div>
  )
}
