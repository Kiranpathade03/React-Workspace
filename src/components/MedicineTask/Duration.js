import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { NewContext } from '../contextapi/NewContext';

function Duration() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const [select, setSelect] = useContext(NewContext);
    const currentDate = new Date();
    const endDate = new Date(currentDate);



    const [selectduration, setSelectduration] = useState();
    console.log("setselectduration", selectduration);
    const handleChipSelect = (value, type) => {
        const selectedValue = watch("Select");  
        const durationValue = parseInt(value);
        setSelectduration(type);

        const endDate = new Date(currentDate.getTime()); // Clone the current date
        endDate.setDate(currentDate.getDate() + durationValue);

        
        // Update select context state based on the selectedValue and quantity
        setSelect([...Array(selectedValue).fill(value * select)]);

        // Update the TextField and Select values
        reset({
            duration: value,
            Select: selectedValue,
        });

        // Calculate and update the end date based on the selected duration
        setValue("endDate", endDate.toISOString().split('T')[0]); // Set the ISO date to the "endDate" field
    

        

    };

    return (
        <div>
            <form onSubmit={handleSubmit(() => { })}>
                <div className='rounded m-2 md:m-12 w-[100%] md:w-[50%] border m-2'>
                    <h4 className='bg-pink-200 text-blue-700 h-10 rounded rounded-b-none'>
                        <h4 className='font-normal ml-3'>Duration</h4>
                    </h4>
                    <div className='m-12 '>
                        <Stack direction="row" spacing={1}>
                            <Box className=' '>
                                <div className='grid grid-cols-7 gap-2'>
                                    <button><Chip label="1 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('1', 'Days')} /></button>
                                    <button><Chip label="2 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('2', 'Days')} /></button>
                                    <button><Chip label="3 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('3', 'Days')} /></button>
                                    <button><Chip label="4 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('4')} /></button>
                                    <button><Chip label="5 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('5', 'Days')} /></button>
                                    <button><Chip label="6 Day" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('6', 'Days')} /></button>
                                    <button><Chip label="1 Week" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('7', 'Days')} /></button>
                                    <button><Chip label="days" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('')} /></button>
                                    <button><Chip label="15 days" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('15', 'Days')} /></button>
                                    <button><Chip label="1 month" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('30', 'Days')} /></button>
                                    <button><Chip label="month" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('', 'Month')} /></button>
                                    <button><Chip label="Year" variant="outlined" className={`hover:bg-orange-500 hover:text-black`} onClick={() => handleChipSelect('', 'Year')} /></button>
                                    {/* ... other Chip buttons */}
                                </div>
                            </Box>
                        </Stack>

                        <div className='mt-4 flex'>
                            <TextField label='Duration' {...register("duration")} defaultValue={0} value={watch("duration")} style={{ marginRight: '8px' }} />
                            <TextField label='Duration in' value={selectduration} defaultValue={'days'} style={{ marginLeft: '8px', marginRight: '8px' }} />

                        </div>

                        <div className='mt-5 gap-y-4 md:flex '>
                            <TextField label="Quantity" value={select} defaultValue={0} />
                            <TextField className='mx-3' type='date' label="Start Date" value={currentDate.toISOString().split('T')[0]} style={{ marginRight: '8px' }} />
                            <TextField type='date' label="End Date" {...register("endDate")} value={watch("endDate")} defaultValue={endDate} style={{ marginLeft: '8px' }} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Duration;
