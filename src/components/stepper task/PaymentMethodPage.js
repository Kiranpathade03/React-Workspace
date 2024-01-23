import React, { useContext } from 'react'
import { useForm } from "react-hook-form"

import { NewContext } from '../contextapi/NewContext';

function PaymentMethodPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const [data, setData] = useContext(NewContext);
  console.log(data);
  const SelectPayment=(paymentMethod)=>{
    const Temparr=[...data];
    Temparr.push(paymentMethod);
    setData(Temparr)
    reset()
  }
  return (
    <div className="bg-white p-8 rounded shadow-md w-full ml-[32%] max-w-md">
      <div>
        <form onSubmit={handleSubmit(SelectPayment)}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Payment</h2>
          <div className='my-4'>
            <div className="mt-3">
              <label htmlFor="upi" className="flex items-center">
                <input {...register('radio')} type="radio" value="UPI" id="upi" />
                UPI
              </label>
              <p className="font-sans text-xs ml-3">Pay by any UPI App</p>
            </div>
            <div className=' mt-3'>
              <label htmlFor="Wallets" className="flex items-center">
                <input {...register("radio")} type="radio" value="Wallets" id='Wallets' />
                Wallets
              </label>
            </div>
            <div className=' mt-3'>
              <label htmlFor="Credit" className="flex items-center">
                <input {...register("radio")} type="radio" value="Credit Card" id='Credit' />
                Credit Card
              </label>
              <p className=' font-sans text-xs ml-3'>Add and Secure Cards as per RBI guidlines</p>
            </div>
            <div className=' mt-3'>
              <label htmlFor="Net" className="flex items-center">
                <input {...register("radio")} type="radio" value="Net Banking" id='Net' />
                Net Banking
              </label>
              <p className=' font-sans text-xs ml-3'>this instrument has low success, use UPI or cards for better experience</p>
            </div>
            <div className=' mt-3'>
              <label htmlFor="EMI" className="flex items-center">
                <input {...register("radio")} type="radio" value="EMI (Easy Installments)" id='EMI' /> EMI (Easy Installments)
              </label>
            </div>
            <div className=' mt-3'>
              <label htmlFor="EMI" className="flex items-center text-gray-500  " >
                <input type="radio" disabled id="EMI" name="paymentMethod" className="mr-2" />
                cash on Delivery
              </label>
            </div>

            <div className='flex gap-3 flex-row items-center mt-7'>
              <img className='w-20' src='https://purepng.com/public/uploads/large/purepng.com-visa-logologobrand-logoiconslogos-251519938794uqvcz.png' />
              <img className='w-20' src='https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo.png' />
              <img className='w-20' src='https://zeevector.com/wp-content/uploads/2021/03/Rupay-Logo-PNG-768x202.png' />
              <img className='w-20' src='https://www.nicepng.com/png/detail/110-1106362_the-payment-card-data-security-standard-provides-a.png' />
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default PaymentMethodPage