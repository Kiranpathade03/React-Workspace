import React from 'react'
import useIncrement from './useIncrement'

function Index() {

    const [count, Increment, Decrement] = useIncrement(2);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { Increment() }}>Increment</button>
            <button onClick={() => { Decrement() }}>Decrement</button>
        </div>
    )
}

export default Index