import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const Values = [
    {
        id: 1,
        name: "City Hospital",
        location: "New York",
        capacity: 300,
        value: 2353
    },
    {
        id: 2,
        name: "General Hospital",
        location: "Los Angeles",
        capacity: 250,
        value: 2243
    },
    {
        id: 3,
        name: "Community Hospital",
        location: "Chicago",
        capacity: 200,
        value: 1343
    },
    {
        id: 4,
        name: "Regional Hospital",
        location: "Houston",
        capacity: 430,
        value: 3443
    }
];
function DetailModal({ open ,setOpen,selectedRowData,setSelectedRowData }) {
    const [selectedRow, setSelectedRow] = useState(-1);
    

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowUp' && selectedRow > 0) {
                setSelectedRow(selectedRow - 1);
            } else if (event.key === 'ArrowDown' && selectedRow < Values.length - 1) {
                setSelectedRow(selectedRow + 1);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedRow]);

    // Log selected row data whenever it changes

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                console.log("Selected Row Data:", Values[selectedRow]);
                setSelectedRowData(Values[selectedRow]);
                setOpen(false)
            }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [selectedRow, Values]); // Include Values in the dependency array if it's used inside the effect
    

     

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 260 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'black' }}>
                                    <TableCell sx={{ color: 'white' }}>Sr No.</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Name</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Value</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Location</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Capacity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Values.map((item, index) => (
                                    <TableRow key={index} sx={{ backgroundColor: selectedRow === index ? 'gray' : 'white' }}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.value}</TableCell>
                                        <TableCell>{item.location}</TableCell>
                                        <TableCell>{item.capacity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
        </div>
    );
}
export default DetailModal;
