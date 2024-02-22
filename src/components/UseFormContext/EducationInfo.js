import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'


function EducationInfo() {
    const {register}=useFormContext();
    return (
        <div className='bg-green-100 mt-12 p-4'>
            <div className='gap-x-3 mt-12 space-y-3 '>
                <h4 className='text-start'> Fill 12th Detail</h4>
                <TextField fullWidth size='small' name='collegename' label='Collage Name' {...register("collegename")}/>
                <div className='flex space-x-4 '>
                    <TextField fullWidth size='small' name='yearofpassing' label='Year of Passing' {...register("yearofpassing")} />
                    <TextField fullWidth size='small' name='12thpercentage' label='Obtained Percentage' {...register("percentage12th")}/>

                </div>
                <h4 className='text-start'> Fill Graduation  Detail</h4>
                <TextField fullWidth size='small' name='collegename' label='Collage Name'{...register("collegenameOfgraduation")}/>
                <div className='flex space-x-4 '>
                    <TextField fullWidth size='small' name='yearofpassingGratuation' label='Year of Passing' {...register("yearofpassingGratuation")}/>
                    <TextField fullWidth size='small' name='GraduationthPercentage' label='Obtained Percentage'{...register("GraduationthPercentage")}/>

                </div>
            </div>
        </div>
    )
}

export default EducationInfo