import React from 'react'

export default function () {
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    marks:123
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  return (


    <>

   {people.map((get)=>{
    return(
      <div className=''>
        <div>{get.name}</div>
        <div> profession :{get.profession}</div>
         
      </div>
    )
   })}
     </>

  )
}
