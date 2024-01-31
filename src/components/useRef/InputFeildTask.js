import React, { useEffect, useRef, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

function InputFeildTask() {
    const [value, setValue] = useState([

    ]);
    const Inpu1 = useRef(null)

    useEffect(() => {
        Inpu1.current.focus();
    }, [])

    const handlekeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setValue([...value, e.target.value]);
            e.target.value = '';
        }
    }
    const handlecheck=(e, index)=>{
        console.log("status",e.target.checked , "At" , index);
    }

    return (
        <div>
            <div>
                <input className='border border-black m-10' ref={Inpu1} onKeyDown={(e) => handlekeydown(e)} onChange={(e) => { }} />
            </div>
            <div className='mt-20'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 260 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{ bgcolor: 'black' }}>
                                <TableCell sx={{ color: 'white' }}>Action</TableCell>
                                <TableCell sx={{ color: 'white' }}>Confirm</TableCell>
                                <TableCell sx={{ color: 'white' }}>Value</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {value.map((item, index) => (
                                <TableRow key={index}  >
                                    <TableCell><DeleteIcon /></TableCell>
                                    <TableCell>   <input type='checkbox' onChange={(e)=>handlecheck(e, index)} /></TableCell>
                                    <TableCell>{item}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default InputFeildTask