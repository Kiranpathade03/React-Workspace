import React, { useState, useEffect   } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useForm } from 'react-hook-form';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Additemcreationdata(Props) {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    control,
    formState: { errors },
  } = useForm();


  const HandleAdddata = (objectdata) => {
    let TempArr = [...Props.tabledata]

    console.log(objectdata);

    TempArr.push(objectdata);
    Props.settabledata(TempArr);

    Props.HandleOnClose()
    reset()
  }

   useEffect(() => {
    if (Props.editrow !== null) {
      setValue('Roll No', Props.editrow['Roll No']);
      setValue('Student Name', Props.editrow['Student Name']);
      setValue('Percentage', Props.editrow['Percentage']);
      setValue('Status', Props.editrow['Status']);
    }
  }, [Props.editrow]);


  console.log(Props.editrow);

 



  return (
    <div>
      <Modal
        open={Props.HandleOnopen}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex justify-between'>
            <h2 className=' font-bold'>Add Student Details</h2>
            <button onClick={() => {
              Props.HandleOnClose(); Props.setEditrow(null)
              reset();
            }}  ><CloseIcon /></button>
          </div>
          <form onSubmit={handleSubmit(HandleAdddata)}>
            <div className='flex space-x-2 mt-16'>
              <TextField label="Roll No" fullWidth  {...register("Roll No")} name='Roll No' />
              <TextField label="Student Name" fullWidth {...register("Student Name")} name='Student Name'  />


              <TextField label='Percentage' fullWidth {...register("Percentage")} name='Percentage' />
              <FormControlLabel
                control={<Checkbox defaultChecked name='Checkbox'  {...register("Checkbox")} />}
                label="Active"
              />
            </div>
          </form>
          <div className=' text-end'>
            <button className=' bg-green-600 p-2 text-white rounded mt-6  w-20' type='submit' onClick={HandleAdddata}>{Props.editrow === null ? (<span>Save</span>) : <span>Update</span>}</button>
          </div>

        </Box>
      </Modal>
    </div>
  );

}

