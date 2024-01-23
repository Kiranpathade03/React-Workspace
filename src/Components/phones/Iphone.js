import React from 'react'
import Footer from '../footer/Footer'
import { Breadcrumbs } from '@mui/material'
import Link from '@mui/material/Link';
import SelectYourBrands from './SelectYourBrands';
import SecondNav from '../navbar/SecondNav';

function Iphone() {
    return (
        <div>
            <h1>Apple</h1>
            <hr />
            <SecondNav name="Iphone" />
            <hr />
            <SelectYourBrands  />
            <Footer />
        </div>
    )
}

export default Iphone