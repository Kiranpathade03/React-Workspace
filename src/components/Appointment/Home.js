import React, { useState } from 'react';
import TableComp from './TableComp';
import TimeSlot from './TimeSlot';
import Select from './Select';
import { NewContext } from '../contextapi/NewContext';
import { ToastContainer } from 'react-toastify';
 

function Home() {
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedTimes, setSelectedTimes] = useState([]);





    return (
        <NewContext.Provider value={[selectedDepartment, setSelectedDepartment, selectedTimes, setSelectedTimes]} >
            <div className='md:flex space-x-1'>
                <div className=' md:w-[25%] m-10'>
                    <Select />

                </div>
                <div className='m-10 w-[71%]' >
                    <div>
                        <TimeSlot selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} />

                    </div>
                    <div className='mt-9'>
                        <TableComp selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes} />
                    </div>
                     
                </div>

            </div>

        </NewContext.Provider>
    );
}

export default Home;
