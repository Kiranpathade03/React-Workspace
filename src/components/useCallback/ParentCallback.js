import React, { useCallback, useState } from 'react'
import Count from './Count';
import Button from './Button';

function ParentCallback() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(50000);

   

  const Handleincreasecount=useCallback(()=>{
    setCount(count+1);
  },[count])
   const Handleincreasesalary=useCallback(()=>{
    setSalary(salary+1);
   },[salary])
  return (
    <div className='text'>
      <Count count={count} text="Count" />
      <Button onClick={Handleincreasecount} >Count +</Button>
      <Count count={salary}text="salary" />
      <Button onClick={Handleincreasesalary} >salary +</Button>
    </div>
  )
}

export default React.memo(ParentCallback);