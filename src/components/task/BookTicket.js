import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import CardComponent from './i';

const BookTicket = () => {
  const cardDetails = [
    {
      name: "Platinum",
      subname: "Standing 1 Ticket for 1 person",
      price: 50000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Gold",
      subname: "Standing 1 Ticket for 1 person",
      price: 40000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Silver",
      subname: "Standing 1 Ticket for 1 person",
      price: 25000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Diamond",
      subname: "Standing 1 Ticket for 1 person",
      price: 20000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Ruby",
      subname: "Standing 1 Ticket for 1 person",
      price: 18000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Pearl",
      subname: "Standing 1 Ticket for 1 person",
      price: 15000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Emerald",
      subname: "Standing 1 Ticket for 1 person",
      price: 10000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
    {
      name: "Plaza",
      subname: "Standing 1 Ticket for 1 person",
      price: 5000,
      count: 0,
      Title: "Please refer Venue Plan:",
      info: "Please refer Venue Plan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam"
    },
  ];

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [cardData, setCardData] = useState(cardDetails)
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);


  
  const handleIncrement = (card, index) => {
    let tempArr = [...cardData];
    let tofindIndex = tempArr.findIndex((value) => { return value.name === card.name })

    if (tofindIndex !== -1) {
      tempArr[tofindIndex].count += 1;
      setCardData([...tempArr]);
      setPrice(price + card.price)
    }
    console.log(card);


  }
  const handleDecrement = (card, index) => {
    let tempArr = [...cardData];

    let tofindIndex = tempArr.findIndex((value) => { return value.name === card.name })

    if (tofindIndex !== -1) {
      if (tempArr[tofindIndex].count > 0) {
        tempArr[tofindIndex].count -= 1;
        setCardData([...tempArr])
        setPrice(price - card.price)
      }
    }
  }
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
     
  };

  return (
    <div className="  justify-between md:flex">
      <div className="w-[45%] fixed top-0 h-full overflow-y-auto">
        <img
          className="w-full h-full object-cover"
          src="https://demos.onepagelove.com/html/stage/images/event-banner.jpg"
          alt="Event Banner"
        />
      </div>
      <div className="w-[50%] z-10 absolute left-[35%] grid grid-cols-1 md:left-[45%] gap-y-4 md:grid md:grid-cols-2 gap-3 mt-4 mx-5">
        {cardData.map((item, index) => (
          <div key={index}  className='border p-3 rounded shadow'>
            <div className="flex justify-between">
              <h5>{item.name}</h5>
              <div className="flex space-x-4">
                <button onClick={() => { handleDecrement(item, index) }} >
                  <RemoveIcon className=" bg-[#0000001f] rounded-full" />
                </button>
                <h5 className="mt-2">{item.count}</h5>
                <button onClick={() => { handleIncrement(item, index) }}>
                  <AddIcon className=" bg-[#0000001f] rounded-full" />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="w-32">{item.subname}</p>
              <p className="mt-14 mb-6">RS.<b>{item.price}</b></p>
            </div>
            <hr />
            <h6>{item.Title}</h6>
            <p>{item.info}</p>

          </div>
        ))}
            <div className=" mt-auto bg-white text-black z-10 w-[50%] fixed top-0  overflow-y-auto">
              <div className="flex justify-around">
                <div className="p-3 flex space-x-3">
                <h5>{ } Ticket </h5>
                    <h5 className="text-slate-700">|</h5>
                    <h5>Total: Rs.{price}</h5>
                </div>
                <button
                  className="bg-orange-500 h-9 w-32 rounded p-2 mt-3 text-white"
                  onClick={() => console.log('Proceed')}
                >
                  Proceed
                </button>
              </div>
            </div>
      </div>
    
    </div>
  );
};

export default BookTicket;
