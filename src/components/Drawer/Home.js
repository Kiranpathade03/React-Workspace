import React, { useState } from 'react'
import MiniDrawer from './MiniDrawer';
import Box from '@mui/material/Box'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';
import { FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router';


function Home() {
  const [consulatant, setconsultant] = useState();
  const naviagte=useNavigate();


  const Consultant = (value) => {
    setconsultant(value);
  }
  console.log("consulatant", consulatant);

  const setenable=()=>{
    
  }
 


  
  return (
    <div>
      <Box sx={{ display: 'flex' }}>

        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className='block  md:flex  mt-20'>
            <div>
              <h2>Please Select Feedback Form!</h2>
              <p>Please share your review to improve our system . Thank You..</p>

              <img className=' md:w-[75%]  ' src='https://img.freepik.com/free-vector/emotional-feedback-concept-illustration_114360-17635.jpg?w=1060&t=st=1704535071~exp=1704535671~hmac=0dcad41138236c2ad07d89add9caba27b05d6baf954259492fc33c79d1628bbc' />

            </div>
            <div className='border rounded md:w-[70%] space-x-4 '>
              <button className='border p-2 ml-3 rounded bg-blue-100 w-[30%] mt-3 hover:bg-blue-600 hover:text-white' onClick={()=>setenable()} >Consaltant</button>
              <button className='border p-2 rounded bg-blue-100 w-[30%] mt-3 hover:bg-blue-600 hover:text-white'>Staff</button>
              <button className='border p-2 rounded bg-blue-100 w-[30%] mt-3 hover:bg-blue-600 hover:text-white'>Patient</button>

              <div className='mt-5 space-y-3'>
                <FormControl fullWidth sx={{ p: 1 }}>
                  <InputLabel id="demo-simple-select-label" >Department</InputLabel>
                  <Select size='small' label="Department" id='demo-simple-select'>
                    <MenuItem value='Department' onClick={()=>setconsultant('consulatant')} >Department</MenuItem>
                    <MenuItem value='Department2'>Department2</MenuItem>
                    <MenuItem value='Department3' >Department3</MenuItem>
                    <MenuItem value='Department4' >Department4</MenuItem>

                  </Select>
                </FormControl>
                <TextField sx={{ p: 1 }} size='small' fullWidth label="Select a Template" InputProps={{ endAdornment: <SearchIcon /> }} />

                {consulatant=='consulatant'?(<FormControl fullWidth sx={{p:1}} >
                    <InputLabel id="demo-simple-select-label"  >Select</InputLabel>
                    <Select size='small' id='demo-simple-select' label='select'>
                      <MenuItem value='select1'onClick={()=>naviagte('/question')} >select1</MenuItem>
                      <MenuItem>select2</MenuItem>
                      <MenuItem>select3</MenuItem>
                    </Select>
                </FormControl>):''}
                
              </div>
            </div>
          </div>


        </Box>
      </Box>
    </div>
  )
}

export default Home;