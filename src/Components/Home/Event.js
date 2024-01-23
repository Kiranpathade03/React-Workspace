import React from 'react'
import Deadpool from '../assets/Selectyourdesign/Deadpool_2.png'
import SpaceBlueprint from '../assets/Selectyourdesign/SpaceBlueprint.png'
import Cybermind from '../assets/Selectyourdesign/Cybermind.png'
import Magma from '../assets/Selectyourdesign/magma.png'
import Grafitti from '../assets/Selectyourdesign/Grafitti.png'
import DeadpoolAttack from '../assets/Selectyourdesign/Deadpool_Attack_1.png'
import Moonknightrising from '../assets/Selectyourdesign/Moon_Knight_Rising_1.png'
import SpaceBuddies from '../assets/Selectyourdesign/SpaceBuddies.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Boldexpressive from '../assets/Events/Bold&expressive.png'
import Boldexpressivephone from '../assets/Events/Mobile_banner_Bold&expressive.png'

function Event() {
    const Layers = [
        {
            phoneimage: Deadpool,
            price: '599',
            name: 'Deadpool',
        },
        {
            phoneimage: SpaceBlueprint,
            price: '599',
            name: 'Space Blueprint',
        },
        {
            phoneimage: Cybermind,
            price: '599',
            name: 'Cybermind',
        },
        {
            phoneimage: Magma,
            price: '599',
            name: 'Magma',
        },
        {
            phoneimage: Grafitti,
            price: '599',
            name: 'Grafitti',
        },
        {
            phoneimage: DeadpoolAttack,
            price: '599',
            name: 'Deadpool Attack',
        },
        {
            phoneimage: Moonknightrising,
            price: '599',
            name: 'Moon knight rising',
        },
        {
            phoneimage: SpaceBuddies,
            price: '599',
            name: 'Space Buddies',
        },
    ];

    return (
        <div>
            {/* Deadpool event */}
            <div>
                <img className='hidden md:block ' src='https://www.layers.shop/cdn/shop/files/DEADPOL_Banner_1..jpg?v=1694692351&width=2100' />
                <img className='md:hidden' src='https://www.layers.shop/cdn/shop/files/DEADPOL_Banner_mobile_1.jpg?v=1694692367&width=1540' />
            </div>
            <div className='mt-6 '>
                <h1 className=' text-center font-normal'> Best Selling Mobile Skins </h1>
                <div className=' grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'>
                    {Layers.map((Skin) => {
                        return (
                            <div className=''>
                                <img className='w-80 my-8 transform transition-transform duration-300 ease-in-out  hover:scale-105' src={Skin.phoneimage} alt={Skin.name} />
                                <div className=' text-center md:flex justify-around'>
                                    <p>{Skin.name}</p>
                                    <p> {Skin.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Bold and Expressive */}
            <div className='mt-4'>
                <img className='hidden md:block ' src={Boldexpressive} />
                <img className='md:hidden' src={Boldexpressivephone} />
            </div>
        </div>
    )
}

export default Event