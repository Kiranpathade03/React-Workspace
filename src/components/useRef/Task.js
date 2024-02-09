import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react'

function Task() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3=useRef();

    useEffect(()=>{
        ref1.current.focus();
    })

    const HandleChangeRef=(e)=>{
        if(e.key ==="Enter"){
            e.preventDefault();
            ref2.current.focus()
        }
    }
    const HandleChangeRef1=(e)=>{
        if (e.key === "Enter") {
            ref3.current.focus();
        }
    }

    return (
        <div className='p-10'>
            <Button variant='outlined' onKeyDown={(e)=>{HandleChangeRef(e)}} ref={ref1}>Clicked me</Button>

            <div className='flex space-x-5 m-5'>
                <TextField onKeyDown={(e)=>{HandleChangeRef1(e)}} inputRef={ref2} label='Fname' size='small' />
                <TextField inputRef={ref3} label='Lname' size='small' />
            </div>
        </div>
    )
}

export default Task