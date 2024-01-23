import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import StudentDetail from './StudentDetail';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
   
  boxShadow: 24,

  p: 4,
};

export default function Home() {
  const [tabledata, setTabledata] = useState([])
   
  
  const [open, setOpen] = useState(false);
  const [editrow, setEditrow] = useState(null)
  console.log(editrow);
  const modelopen = () => setOpen(true);
  const modelclose = () => setOpen(false);
  const [confermationmodal, setconfermationmodal] = useState(false)
  const [deleteIndex , setDeleteindex]=useState(null)

  const DeleteRecord=()=>{
    if(deleteIndex !== null){
      let newtemparray= [...tabledata]

      newtemparray.splice(deleteIndex,1);
      setTabledata(newtemparray);
      setDeleteindex(null);
      setconfermationmodal(false);
    }
  }
 

  

  return (
    <div >
      <div className='flex items-center justify-between'>
        <div className='p-10 space-x-2 items-center flex '>
          <TextField label='Search Student Detail' size='small' />
          <Button variant='contained' className=' items-center'><SearchIcon /></Button>
        </div>
        <div className='bg-black rounded mr-10 items-center'>
          <Button className='text-white p-2 ' variant='contained' sx={{ color: 'white' }} onClick={modelopen}>+Add</Button>
        </div>
      </div>
      {tabledata.length > 0 ? (<TableContainer component={Paper}>
        <Table className='' sx={{}} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }}> Action</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }}>Mr./Miss</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >First Name</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >Last Name</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >Phone No</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >Age</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >Gender</TableCell>
              <TableCell align="center" style={{ backgroundColor: "black", color: "white" }} >Status</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {tabledata.map((item, index) => {
              return (
                <TableRow>

                  {/* <TableCell align="center" ><EditIcon /></TableCell> */}
                  <TableCell align="center" className=' space-x-2' ><EditIcon onClick={() => { setEditrow(item); setOpen(true) }} /><button onClick={()=>{setconfermationmodal(true); setDeleteindex(index)} } ><DeleteIcon /></button></TableCell>
                  <TableCell align="center">{item["Select"]}</TableCell>
                  <TableCell align="center">{item["First Name"]}</TableCell>
                  <TableCell align="center">{item["Last Name"]}</TableCell>
                  <TableCell align="center">{item["Phone Number"]}</TableCell>
                  <TableCell align="center">{item["Age"]} </TableCell>
                  <TableCell align="center">{item["Gender"]} </TableCell>
                  <TableCell  align="center">{item.Status === true ? (<p className='text-green-600'>Active</p>) : <p className=' text-red-600'>InActive</p>}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>) : <p className=' text-center mt-24'>No  Record Found</p>}

      <StudentDetail modelopen={open} modelclose={modelclose} editrow={editrow} setEditrow={setEditrow} tabledata={tabledata} setTabledata={setTabledata} />

      <div>
        <Modal
          
          open={confermationmodal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Box sx={style} className="h-[30%] rounded">
            <h2 className='ml-5 text-2xl'>Are You Sure Want Delete Thise <span className='ml-28'>Reacord?</span></h2>
            <div className="flex space-x-6 ml-28 mt-14">
              <button
                type="button" className="border border-red-600 text-red-600 rounded p-1" onClick={()=>{setconfermationmodal(false)}} >
                Cancel
              </button>
              <button
                type="button" className="bg-green-600 text-white rounded p-1" onClick={DeleteRecord} >
                Confirm
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
