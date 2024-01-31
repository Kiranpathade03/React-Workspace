import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NewContext } from '../contextapi/NewContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ToastContainer, toast } from 'react-toastify';

export default function TableComp({ selectedTimes , setSelectedTimes }) {
    const DeleteSlot=(slotindex)=>{
        let temparr=[...selectedTimes]
        temparr.splice(slotindex,1)

        setSelectedTimes(temparr);
        toast.success("Time Slot Deleted Successfully...")
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 260 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Actions</TableCell>
                        <TableCell>From Time</TableCell>
                        <TableCell>To Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedTimes.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell><button onClick={() => { DeleteSlot(index) }}><DeleteOutlineIcon /></button></TableCell>
                            <TableCell>{item.fromTime}</TableCell>
                            <TableCell>{item.toTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ToastContainer/>
        </TableContainer>
    );
}
