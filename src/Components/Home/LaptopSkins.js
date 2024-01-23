import React from 'react'
import JEdiAttack from '../assets/LaptopSkins/Starjedi-Laptop.png'
import Universe from '../assets/LaptopSkins/Star-universe-laptop.png'
import MandalorianSilhouette from '../assets/LaptopSkins/Mando-laptop.png'
import Cybermind from '../assets/LaptopSkins/Cybermind.png'
import Magma from '../assets/LaptopSkins/magma_1.png'
import Chaos from '../assets/LaptopSkins/chaos_1.png'
import CranberryAbstract from '../assets/LaptopSkins/pink-min.png'
import Oceanic from '../assets/LaptopSkins/blue.png'
import { Laptop } from '@mui/icons-material'


function LaptopSkins() {
    const LaptopSkins = [
        {
            LaptopImage: JEdiAttack,
            price: '1199',
            name: 'JEdi Attack',
        },
        {
            LaptopImage: Universe,
            price: '1199',
            name: 'Universe',
        },
        {
            LaptopImage: MandalorianSilhouette,
            price: '1199',
            name: 'Mandalorian Silhouette',
        },
        {
            LaptopImage: Cybermind,
            price: '1199',
            name: 'Cybermind',
        },
        {
            LaptopImage: Magma,
            price: '1199',
            name: 'Magma',
        },
        {
            LaptopImage: Chaos,
            price: '1199',
            name: 'Chaos',
        },
        {
            LaptopImage: CranberryAbstract,
            price: '1199',
            name: 'Cranberry Abstract',
        },
        {
            LaptopImage: Oceanic,
            price: '1199',
            name: 'Oceanic',
        },
    ]
    return (
        <div>
            <h2 className='text-center font-normal mt-6'>
                Best Selling Laptop Skins
            </h2>
            <div className='  grid grid-cols-2 md:grid-cols-4 gap-2'>

                {LaptopSkins.map((Laptop) => {
                    return (
                        <div>
                            <img className='w-80  items-center  transform transition-transform duration-300 ease-in-out  hover:scale-105' src={Laptop.LaptopImage} />
                            <div className='text-center md:flex justify-around '>
                                <p>{Laptop.name}</p>
                                <p>{Laptop.price}</p>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default LaptopSkins