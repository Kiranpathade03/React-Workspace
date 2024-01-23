import React from 'react';
import BlackCrack from '../assets/Selectyourdesign/Black Crack.png';
import AstroRainbow from '../assets/Selectyourdesign/AstroRainbow.png';
import Cyberhud from '../assets/Selectyourdesign/Cyberhud.png';
import MachinaHud from '../assets/Selectyourdesign/MachinaHud.png';
import BeforeSunset from '../assets/Selectyourdesign/Before_sunset.png';
import GoldenSwirl from '../assets/Selectyourdesign/GoldenSwirl.png';
import sKid from '../assets/Selectyourdesign/90s_kid.png';
import Cultivatekindness from '../assets/Selectyourdesign/cultivate_Kindness.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function Brands() {
  const phones = [
    {
      phoneimage: BlackCrack,
      price: '599',
      name: 'Black Crack',
    },
    {
      phoneimage: AstroRainbow,
      price: '599',
      name: 'Astro Rainbow',
    },
    {
      phoneimage: Cyberhud,
      price: '599',
      name: 'Cyberhud',
    },
    {
      phoneimage: MachinaHud,
      price: '599',
      name: 'MachinaHud',
    },
    {
      phoneimage: BeforeSunset,
      price: '599',
      name: 'BeforeSunset',
    },
    {
      phoneimage: GoldenSwirl,
      price: '599',
      name: 'GoldenSwirl',
    },
    {
      phoneimage: sKid,
      price: '599',
      name: 'sKid',
    },
    {
      phoneimage: Cultivatekindness,
      price: '599',
      name: 'Cultivatekindness',
    },
  ];

  return (
    <div>
      <h1 className='text-center font-normal'>Layers Original Designs</h1>

      <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 '>
        {phones.map((phone) => {
          return (
            <div className=''>
              <img
                className='w-80 my-5 items-center  transform transition-transform duration-300 ease-in-out  hover:scale-105'
                src={phone.phoneimage}
                alt={phone.name}
              />
              <div className='text-center md:flex justify-around mx-4'>
                <p className='hover:underline cursor-pointer'>{phone.name}</p>

                <p>
                  <CurrencyRupeeIcon /> {phone.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
