import React from 'react'
import Navbar from './Navbar'

import MediaControlCard from './MediaControlCard'
import Services from './Services'
import Cart from './Cart'
import { useState } from 'react'
import { NewContext } from '../contextapi/NewContext'

function Home() {
   const [services, setServices] = useState([]);
  const [price, setPrice] = useState(0);

   
  return (
    <div>
      <NewContext.Provider value={{  price, setPrice ,services,setServices }} >

        <Navbar />
        <div className='flex gap-x-6'>
          <div className='w-[60%]'>
            <div className='flex'>
              <div className='w-[100%] ml-20 mt-10'>
                <MediaControlCard />
              </div>
              <div>

              </div>
            </div>
            <div className='ml-20 mt-10 '>
              <h3>Additional Service You may like</h3>
              <Services />
            </div>
          </div>
          <div className='border mt-10 mr-20 w-[35%]   shadow'>
            <Cart />
          </div>
        </div>
      </NewContext.Provider>
    </div >
  )
}

export default Home