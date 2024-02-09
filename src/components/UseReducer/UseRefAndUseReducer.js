import React, { useEffect, useReducer, useRef } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "HandleRef2":
            return (
                if (e.key === "Enter") {
                e.preventDefault()
                ref2.current.focus();
            });


        default:
            break;
    }
}

function UseRefAndUseReducer() {
    const [state , dispatch]=useReducer(reducer)

    const ref1 = useRef();
    const ref2 = useRef()


    useEffect(() => {
        ref1.current.focus();
    })
    return (
        <div>
            <div className='p-10'>
                <Button variant='outlined' onKeyDown={(e) => { HandleChangeRef(e) }} ref={ref1}>Clicked me</Button>

                <div className='flex space-x-5 m-5'>
                    <TextField onKeyDown={(e) => { HandleChangeRef1(e) }} inputRef={ref2} label='Fname' size='small' />
                    <TextField inputRef={ref3} label='Lname' size='small' />
                </div>
            </div>

        </div>
    )
}

export default UseRefAndUseReducer