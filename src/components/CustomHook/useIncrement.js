import React, { useState } from 'react'

function useIncrement(initialstate = 0) {
  const [count, setCount] = useState(initialstate);

  const Increment = () => {
    setCount(count + 1);

  }
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return [count, Increment, Decrement]
}

export default useIncrement;