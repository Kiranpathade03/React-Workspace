import { TextField, TextareaAutosize } from '@mui/material';
import { useForm } from "react-hook-form"
import React, { useEffect, useState } from 'react'
import Page3 from './Page3';
import { NewContext } from './NewContext';
import { useContext } from 'react';


function Page1(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  const [data, setData] = useContext(NewContext);
   

  const onSubmit = (objectdata) => {
    const Temparr = [...data];
    Temparr.push(objectdata)
    console.log("tempArr", Temparr);
    setData(Temparr);
    reset()
  }
  return (

    <div className='flex items-center flex-col mt-12 '>


      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <TextField label='Name' name='Name' fullWidth size='small'{...register('Name')} />
          </div>

          <div className="mb-4">
            <TextField label='Email Address' fullWidth size='small'{...register('Email')} />
          </div>

          <div className="mb-4">
            <TextField label='Phone No' fullWidth size='small'{...register('Phoneno')} />
          </div>

          <div className="mb-6">

            <TextField label='Address' fullWidth size='small'{...register('Address')} />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"  >
            Register
          </button>
        </form>
      </div>
    </div>


  )
}

export default Page1