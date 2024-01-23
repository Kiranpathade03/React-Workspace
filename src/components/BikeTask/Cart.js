import React, { useContext } from 'react'
import { NewContext } from '../contextapi/NewContext'
import CancelIcon from '@mui/icons-material/Cancel';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Cart() {
    const { price, setPrice, services, setServices } = useContext(NewContext);

    const DeleteService = (deletedIndex) => {
        if (deletedIndex !== null) {
            let newtemparray = [...services]
            newtemparray.splice(deletedIndex, 1)
            setServices(newtemparray);

        }
    }
    console.log("price",price);
    return (
        <div>
            <div className=''>
                <h3 className='m-4'>Bajaj CT100</h3>
            </div>
            <hr />
            <div className='text-center'>
                <input type='text' placeholder='MH 00 XX 0000' className='border bg-gray-200 w-[80%] m-1 h-12 mx-auto ' />

            </div>
            <hr />

            <div className='m-4 flex justify-between grid '>
                {services.map((item, index) => {
                    return (
                        <>
                            <div className='flex justify-between'>
                                <h4>{item.name}</h4>
                                <div className='flex gap-2 text-center'>
                                    <h4 className='ml-32 my-auto'>Rs.{item.price}</h4>
                                    <button onClick={() => { DeleteService(index) }}><CancelIcon fontSize='small' className='my-auto ' /></button>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
            <div>
                <div className='flex justify-between m-4'>
                    <h4>Total :</h4>
                    <h4>Rs.{price} </h4>
                </div>

            </div>
            <div className='text-center'>
            <FormControl  className='w-[80%] ' >
              <InputLabel id="demo-simple-select-label">Select Your Area</InputLabel>
              <Select
                sx={{ marginTop: "8px" }}
                labelId="demo-simple-select-label"
                size="small"
                id="demo-simple-select"
                 
                label="Frequency"
                 
              >
                <MenuItem value={3}>Pune</MenuItem>
                <MenuItem value={2}>Mumbai</MenuItem>
                <MenuItem value={2}>Delhi</MenuItem>
                <MenuItem value={2}>Kopergaon</MenuItem>
                <MenuItem value={1}>Nashik</MenuItem>
                 
              </Select>
            </FormControl>
            </div>
            <div className='text-center'>
                <button className='bg-blue-100 p-2 w-[80%] m-8'>Check Out</button>

            </div>

        </div>
    )
}

export default Cart