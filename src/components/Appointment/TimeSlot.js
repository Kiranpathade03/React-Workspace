import React, { useContext, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { NewContext } from '../contextapi/NewContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import { DesktopTimePicker } from '@mui/x-date-pickers';

function TimeSlot({ selectedTimes, setSelectedTimes }) {
  const [selectedDepartment ,setSelectedDepartment] = useContext(NewContext);

  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);

  console.log("seleted times", selectedTimes);

  console.log("selected depaertment", selectedDepartment);

  const handleAddTimeSlot = () => {
    if (selectedDepartment === null) {
      toast.error("Please select a department.");
    } else if (fromTime && toTime) {
      setSelectedTimes([...selectedTimes, {
        department: selectedDepartment,
        fromTime: fromTime.format("HH:mm A"),
        toTime: toTime.format("HH:mm A")
      }]);
      setFromTime(null);
      setToTime(null);
      toast.success("Time slot added successfully")
    } else {
      toast.error('Please select both "From Time" and "To Time".');
    }
  };
  const reset=()=>{
    setFromTime(null);
    setToTime(null);
    setSelectedDepartment(null);
    
  }
  

  return (
    <div className='text-center'>
      <div className='flex space-x-4'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='flex space-x-3'>
            <DesktopTimePicker
              value={fromTime}
              onChange={(newValue) => setFromTime(newValue)}
              ampm={true}
              format="HH:mm a"
             
            />
            <TimePicker
              value={toTime}
              onChange={(newValue) => setToTime(newValue)}
              ampm={true}
              format="HH:mm a"
               
            />
          </div>
        </LocalizationProvider>
        <Button color='error' variant='outlined' className='w-32' onClick={reset}>Reset</Button>
        <Button variant='outlined' className=' border  p-2 rounded' size='small' onClick={handleAddTimeSlot}>Add Time Slot</Button>
      </div>


      <ToastContainer />
    </div>
  );
}

export default TimeSlot;
