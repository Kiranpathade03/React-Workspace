 import React from 'react'
 
 export default function Eventhandling() {
 const clicked=()=>{
    alert("hello")
  }
   return (
     <div>
      <button onClick={clicked}>Clicked</button>
     </div>
   )
 }
 