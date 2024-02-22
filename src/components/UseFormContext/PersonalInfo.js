import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import UseFormContext from './UseFormContext';
import { useFormContext } from 'react-hook-form';

function PersonalInfo() {
    const { register , errors ,prefix  } = useFormContext();
    return (
        <div className='bg-orange-100 p-4'>
            <h4>PersonalInfo</h4>
            <div className='grid-cols-3 flex gap-x-3'>
                <FormControl sx={{ width: 250 }} size='small'>
                    <InputLabel id="demo-simple-select-label">Prefix</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='prefix'
                        {...register("prefix")}
                        error={errors.prefix ? true : false} 
                        
                        >
                        <MenuItem value='Mr.'>Mr.</MenuItem>
                        <MenuItem value='Miss.'>Miss.</MenuItem>
                        <MenuItem value='Mrs.'>Mrs.</MenuItem>
                    </Select>
                </FormControl>
                <TextField type='text' size='small' fullWidth label='First Name' name="firstname" {...register("firstname")}   />
                <TextField type='text' size='small' fullWidth label='Middle Name' name='middlename' {...register("middlename")} />
            </div>
            <div className='flex gap-x-3 mt-3'>
                <TextField type='text' size='small' fullWidth label='Last Name' name='lastname' {...register("lastname")} />

            </div>
        </div>
    )
}

export default PersonalInfo;
