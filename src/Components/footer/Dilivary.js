import React from 'react'
import Dispatch from '../assets/Dilivary/Dispatch.png'

import fastdilivary from '../assets/Dilivary/fastdilivary.png'

function Dilivary() {
    const dilivery=[
        {
            image: 'https://i.postimg.cc/FsVZVpQJ/Dispatch.png',
            name:'Same Day Dispatch',
            para:'All orders placed before 12pm Monday to Friday are dispatched same day.'
        },
        {
            image: fastdilivary,
            name:'Free & Fast Delivery',
            para:'Orders to metro cities reach in 2-3 working days.'
        },
        {
            image: Dispatch,
            name:'Cancellation Policy',
            para:'Easy cancellation from the dashboard within 12 hours of placing the order'
        },
    ]
  return (
    <div className='mt-7'> 
        <div className=' grid grid-cols-1 text-center md:grid-cols-3'>
            {dilivery.map((item)=>{
                return(
                    <div>
                        <img className='w-24 mx-auto ' src={item.image}/>
                        <br/>
                        <h2 className='font-normal'>{item.name}</h2>
                        <p className='w-[80%] mx-auto font-normal'>{item.para}</p>
                    </div>
                )
            })}
         </div>
    </div>
  )
}

export default Dilivary