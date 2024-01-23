import React from 'react'
import SecondNav from '../navbar/SecondNav'
import Footer from '../footer/Footer'
import SelectYourBrands from './SelectYourBrands'

function Samsung() {
  return (
    <div>
    <h1>Samsung</h1>
    <hr />
    <SecondNav name="Samsung"/>
    <hr />
    <SelectYourBrands  />
    <Footer />
</div>
  )
}

export default Samsung