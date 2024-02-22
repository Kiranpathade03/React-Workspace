import { TextField } from '@mui/material'
import React from 'react'
import UseFormContext from './UseFormContext'
import { useFormContext } from 'react-hook-form'
 

function Address() {
    const {register}=useFormContext();
    
  return (
    <div className='bg-slate-300 mt-12 p-4  '>
        <h4>Address</h4>
        <div className='grid grid-cols-3 gap-x-3 mt-6 '>
            <TextField size='small' label='Contry' name='Contry' {...register("Contry")}  />
            <TextField size='small' label='District' name='District'{...register("District")} />
            <TextField size='small' label='Village' name='Village '{...register("Village")} />
        </div>
    </div>
  )
}

export default Address