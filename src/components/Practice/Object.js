import React, { useState } from 'react'

export default function Object() {

  const arry = [
    {
      name: "abhishek",
      rollno: 123
    },
    {
      name: "abhishek",
      rollno: 123
    },
    {
      name: "abhishek",
      rollno: 123
    }
  ]
  let temparr = []

  //******************* */
  const [object, setObject] = useState({
    name: 'kiran',
    rollno: 123
  })
  
  const change = () => {
    setObject({ ...object, name: 'shubham', rollno: 1234 })
  }

  const [data , setdata]=useState({
    subject:"java",
    marks:234
  })
 const changedata=()=>{
  setdata({...data, subject:"react",marks:323})
 }
  return (
    <div>
      <h2>the name is {object.name} and roll no is {object.rollno}</h2>
      <br/>
      <h2>the name is {data.subject} and roll no is {data.marks}</h2>
      <button onClick={change}> change</button><br/>
    <button onClick={changedata}>chnagedata</button>
    </div>

  )
}
