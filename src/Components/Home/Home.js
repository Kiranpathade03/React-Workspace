import React from 'react'
import Images from './Images'
import Brands from './Brands'
import Event from './Event'
import { Laptop } from '@mui/icons-material'
import LaptopSkins from './LaptopSkins'
import Footer from '../footer/Footer'
import Dilivary from '../footer/Dilivary'
 
 

function Home() {
    return (
        <div>
            <Images />
            <Brands />
            <Event/>
            <LaptopSkins/>
            <Dilivary/>
            <Footer/>
            
        </div>
    )
}

export default Home