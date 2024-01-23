 import React, {useEffect, useState} from 'react'
import User from './User';
export default function Useeffect() {
    const [data , setdata]=useState(1);
    const [count , setcount]=useState(100);
 
  return (

    <div> 
        <User count={count}data={data}/>
        <button onClick={()=>setcount(count+1)}> update count</button>
        <button onClick={()=>setdata(data+1)}>update data</button>
     </div>
  )
}
