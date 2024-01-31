import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { NewContext } from '../contextapi/NewContext';

function TimeSlot() {

  const [selectedDepartment,setSelectedDepartment]=useContext(NewContext);

 console.log("department",selectedDepartment);
  
  const options = [
    { value: 'Pharmacy', label: 'Pharmacy',   isFixed: true },
    { value: 'Emergency', label: 'Emergency' },
    { value: 'Neonatal Unit', label: 'Neonatal Unit' },
    { value: 'Dietetice', label: 'Dietetice', isFixed: true },
    { value: 'Oncology', label: 'Oncology' },
    { value: 'Physiotherapy', label: 'Physiotherapy' },
    { value: 'Pathology', label: 'Pathology' },
    { value: 'Critic Care', label: 'Critic Care' },
    { value: 'Cardiology', label: 'Cardiology' }

];
 

  return (
    <div>
 
      <Select
        options={options}
        onChange={(selectedOption) => setSelectedDepartment(selectedOption)}
        menuIsOpen={true}
        
      />


      

    
     
    </div>
  );
}

export default TimeSlot;
