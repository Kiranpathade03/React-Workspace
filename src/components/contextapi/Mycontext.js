import React, { useContext } from 'react'
import { NewContext } from './NewContext'
function Mycontext() {
  const {text, setText}=useContext(NewContext);
  return (
    <div> 
      <h1>{text}</h1>
      <button onClick={()=>{setText("hello")}}>Click</button>
    </div>
  )
}

export default Mycontext