import React, { useContext } from 'react';
import BrakeReplacement from '../assets/BikeTask/Brake Replacement.png';
import { NewContext } from '../contextapi/NewContext';

function Services() {
  const { price, setPrice, services, setServices } = useContext(NewContext);
  const Service = [
    {
      image: BrakeReplacement,
      name: "Brake Replacement",
      price: 1700,
    },
    {
      image: BrakeReplacement,
      name: "Wheel Replacement",
      price: 2300,
    },
    {
      image: BrakeReplacement,
      name: "Battery Replacement",
      price: 12000,
    },
    {
      image: BrakeReplacement,
      name: "Brake Replacement",
      price: 1700,
    },
    {
      image: BrakeReplacement,
      name: "Wheel Replacement",
      price: 2300,
    },
    {
      image: BrakeReplacement,
      name: "Battery Replacement",
      price: 12000,
    },
  ];

  console.log("Price", price);
  const Addservice = (itemName, itemPrice) => {
    // Create an object  
    const selectedService = {
      name: itemName,
      price: itemPrice,
    };

    // Update the state with the selected service
   console.log("itemPrice",itemPrice);
   let totalP =0
    setPrice(Number(price) + Number(itemPrice));



    // Update the services state by adding the selected service to the array
    setServices([...services, selectedService]);
  };

  return (
    <div className='w-[100%] mt-6'>
      <div className='grid grid-cols-3 gap-y-10 gap-x-10'>
        {Service.map((item, index) => (
          <div key={index} className='border rounded bg-blue-100 text-center p-2'>
            <img className='w-20 mx-auto my-4' src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <button
              className='border p-2 border-black bg-transparent'
              onClick={() => Addservice(item.name, item.price)}
            >
              Add Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
