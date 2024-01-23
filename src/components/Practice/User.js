// useeffect

import React, {useEffect, useState} from 'react'

export default function User(props) {
     
    useEffect(()=>{
      console.warn("calling data")
    },[props.data])
   
  return (

    <div> 
        <h1>props Count : {props.count}</h1>
        <h1>props Data : {props.data}</h1>
       
     </div>
  )
}
