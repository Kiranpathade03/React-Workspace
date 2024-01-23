import React, { useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm } from 'react-hook-form'
import Duration from './Duration';
import { NewContext } from '../contextapi/NewContext';

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [select, setSelect] = useState();
  

  console.log("target",select);
  
  const handlechaange = (e) => {
    setSelect(e.target.value)
  }

  const onSubmit = (data) => {
    // console.log("Select", data.Select);
  }
  return (
    <div className=''>
      <div className='block md:flex w-[]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='rounded   m-2 md:m-8 w-[100%] md:w-[97%] border'>
          <h4 className='bg-violet-200 text-blue-700  h-10 rounded rounded-b-none'><h4 className='ml-3 font-normal'>Frequency</h4></h4>
          <div className='m-12'>
            <Stack direction="row" spacing={1}>
              <div className='grid grid-cols-6  md:flex gap-2'>
                <button ><Chip   label="1---1---1" value={3} variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="1---0---1" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="0---1---1" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="1---1---0" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="0---1---0" value='1' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="0---0---1" value='1' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="1---0---0" value='1' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="More" value='1-1-1' variant="outlined" className='w-20 hover:bg-orange-500 hover:text-white' /></button>
              </div>
            </Stack>

          </div>
          <div className='w-40 m-12'>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
              <Select
                sx={{ marginTop: "8px" }}
                labelId="demo-simple-select-label"
                size="small"
                id="demo-simple-select"
                {...register("Select")}
                label="Frequency"
                onChange={handlechaange}
              >
                <MenuItem value={3}> 1---1---1</MenuItem>
                <MenuItem value={2}>1---0---1</MenuItem>
                <MenuItem value={2}>0---1---1</MenuItem>
                <MenuItem value={2}>1---1---0</MenuItem>
                <MenuItem value={1}>0---1---0</MenuItem>
                <MenuItem value={1}>0---0---1</MenuItem>
                <MenuItem value={1}>1---0---0</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='rounded   m-2 md:m-12 w-[100%] md:w-[97%] md:mx-2 border'>
          <h4 className='bg-sky-200 text-blue-700  h-10 rounded rounded-b-none'><h4 className='ml-3 font-normal'>Instuction</h4></h4>
          <div className='m-12'>
            <Stack direction="row" spacing={1}>
              <div className='grid grid-cols-6  md:flex gap-2'>
                <button><Chip label="Before Sleep" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="Before Meal" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="After BreakFast" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="Lunch" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="Lunch" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="Lunch" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
                <button><Chip label="Lunch" value='2' variant="outlined" className=' hover:bg-orange-500 hover:text-white' /></button>
               </div>
            </Stack>

          </div>
          <div className='w-40 m-12'>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Instuction</InputLabel>
              <Select
                sx={{ marginTop: "8px" }}
                labelId="demo-simple-select-label"
                size="small"
                id="demo-simple-select"
                {...register("Select")}
                label="Frequency"
                onChange={handlechaange}
              >
                <MenuItem value={3}>Before Sleep</MenuItem>
                <MenuItem value={2}>Before Meal</MenuItem>
                <MenuItem value={2}>After BreakFast</MenuItem>
                <MenuItem value={2}>Lunch</MenuItem>
                 
              </Select>
            </FormControl>
          </div>
        </div>
      </form>
      </div>
      <NewContext.Provider value={[select, setSelect]} >
        <Duration />
      </NewContext.Provider>

    </div >
  )
}

export default Home