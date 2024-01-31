import { TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'

function UseRef() {
    const useref1 = useRef(null);
    const useref2 = useRef(null);



    useEffect(() => {
        useref1.current.focus();
    }, [])

    const handlekeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            useref2.current.focus();
        }
    }

    return (
        <div className='m-10 space-x-2'>
            <input className='border border-black ' type='text'
                ref={useref1}

                onChange={(e) => { console.log("12345", e.target.value); }}
                onKeyDown={(e) => handlekeydown(e)}
            />
            <input className='border border-black ' type='text' ref={useref2} />
        </div>
    )
}

export default UseRef