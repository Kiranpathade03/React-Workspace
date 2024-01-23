import { TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Additemcreationdata from './Additemcreationdata';
import EditIcon from '@mui/icons-material/Edit';

export default function Itemcreation() {
  const [tabledata, settabledata] = useState([]);
  const [Open, setOpen] = useState(false);
  const [editrow, setEditrow] = useState(null);
  console.log(editrow);
  const HandleOpen = () => {
    setOpen(true);
  }
  const HandleClose = () => {
    setOpen(false);
  }




  return (
    <div>
      <div className=' md:flex justify-between items-center '>
        <div className=' p-14 flex items-center space-x-2'>
          <TextField className='  '
            size='small'
            fullWidth
            label='Search a Student Details'
          />
          <button className='text-white '><SearchIcon className='bg-black rounded p-1 ' sx={{ fontSize: 37 }} /></button>
        </div>
        <button className=' ml-32 md: bg-black rounded mr-12 p-2  text-white whitespace-nowrap' onClick={HandleOpen} >+ADD</button>

      </div>
      <div className='mx-5 mt-10 '>
        {/* Table */}
        {tabledata.length > 0 ? (<TableContainer component={Paper}>
          <Table className='' sx={{}} aria-label="simple table">
            <TableHead >
              <TableRow>
                <TableCell align="right" style={{ backgroundColor: "black", color: "white" }}>Action</TableCell>
                <TableCell align="right" style={{ backgroundColor: "black", color: "white" }} >Roll No</TableCell>
                <TableCell align="right" style={{ backgroundColor: "black", color: "white" }} >Student Name</TableCell>
                <TableCell align="right" style={{ backgroundColor: "black", color: "white" }} >Percentage</TableCell>
                <TableCell align="right" style={{ backgroundColor: "black", color: "white" }} >Status</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {tabledata.map((item) => {
                return (
                  <TableRow>

                    <TableCell align="right" ><EditIcon onClick={() => { console.log(item); setEditrow(item); setOpen(true) }} /></TableCell>
                    <TableCell align="right">{item["Roll No"]}</TableCell>
                    <TableCell align="right">{item["Student Name"]}</TableCell>
                    <TableCell align="right">{item["Percentage"]}%</TableCell>
                    <TableCell align="right">{item.Status === true ? (<h1 className='text-green-600'>Active</h1>) : <h1 className=' text-red-600'>InActive</h1>}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>) : <h1 className=' text-center mt-24'>No  Record Found</h1>}
        <Additemcreationdata HandleOnopen={Open} HandleOnClose={HandleClose} tabledata={tabledata} settabledata={settabledata} editrow={editrow} setEditrow={setEditrow} />

      </div>




      
    </div>
  )
}
