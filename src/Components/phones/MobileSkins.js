import React from 'react'
 
import Footer from '../footer/Footer'
import SelectYourBrands from './SelectYourBrands'

function MobileSkins() {
  return (
    <div>
        <SelectYourBrands/>
        <div className='mt-7'>
        <Footer />
        </div>
    </div>
  )
}

export default MobileSkins