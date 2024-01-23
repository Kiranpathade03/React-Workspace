import React, { useState } from 'react'

export default function FormHandling() {
    const [name, setName]=useState('');
     const [tnc ,settnc]=useState(false);
     const [option ,setoption]=useState('')
     function getformData(e){
            e.preventDefault()
            console.warn(name,tnc,option)
    }
    return (
        <div className=' p-20'>
            <form onSubmit={getformData}>
                <h1>Form Handling in React</h1>
                <input type='text' placeholder='Enter a name' onChange={(e)=>setName(e.target.value)} style={{ border: '1px solid black' }} />
                <br></br>
                <br></br>
                <select style={{ border: '1px solid black' }} onChange={(e)=>setoption(e.target.value)}>
                    <option>Select option</option>
                    <option>Kiran</option>
                    <option>Shubham</option>
                    <option>Abhishek</option>
                    <option>Sanket</option>
                    <option>BHarat</option>
                </select>
                <br></br>
                <input type='checkbox' /><h1>Accept terms and Condtion</h1>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
