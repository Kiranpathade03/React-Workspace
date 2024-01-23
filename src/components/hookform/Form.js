import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit=(objectdata)=>{
    console.log(objectdata);
}
let view=watch("Name");
console.log(view);
  return (
    <div> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField name='Name' {...register("Name")}/>
                <button type='submit'>save</button>
            </form>

    </div>
  )
}
