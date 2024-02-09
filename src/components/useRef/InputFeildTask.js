import React, { useEffect, useRef, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function InputFieldTask() {
    const [values, setValues] = useState([]);
    const [checkedState, setCheckedState] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setValues([...values, e.target.value]);
            setCheckedState([...checkedState, false]); // Add initial unchecked state for new item
            e.target.value = '';
        }
    };

    const handleCheck = (index) => {
        const updatedCheckedState = [...checkedState];
        updatedCheckedState[index] = !updatedCheckedState[index];
        setCheckedState(updatedCheckedState);
    };

    return (
        <div>
            <div>
                <input className='border border-black m-10' ref={inputRef} onKeyDown={handleKeyDown} onChange={() => { }} />
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
                            {values.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell><DeleteIcon /></TableCell>
                                    <TableCell>
                                        <input type='checkbox' checked={checkedState[index]} onChange={() => handleCheck(index)} />
                                    </TableCell>
                                    <TableCell style={{ color: checkedState[index] ? "green" : "black" }}>{item}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default InputFieldTask;
