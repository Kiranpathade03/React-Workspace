import React, { useEffect, useRef, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import DetailModal from './DetailModal';
import { useForm } from 'react-hook-form';



function MainTabel({ Detail ,setDetail}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()
  const [open, setOpen] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const Firsttextfeild = useRef(null)
  // First render to scope the input type
console.log("selected row data" , selectedRowData);
  useEffect(() => {
    Firsttextfeild.current.focus()
  }, [])

  // handle open with the help of TAB

  const handleOpen = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setOpen(true);
    }
  }

  const DeleteRecord=(recordIndex)=>{
    let temprecord=[...Detail]

    temprecord.splice(recordIndex,1)
    setDetail(temprecord);
  }
useEffect(()=>{
if(selectedRowData !== null){
  for(let  i=0; Detail?.length > 0; i++){
    setValue(`batchNumber${i}`,selectedRowData.value)
  }

}
},[selectedRowData])


  return (
    <div className='m-20'>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 260 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: 'black' }}>
              <TableCell sx={{ color: 'white' }}>Actions</TableCell>
              <TableCell sx={{ color: 'white' }}>First Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Detail.map((item, index) => (
              <TableRow key={index}>
                <TableCell><button onClick={() => { DeleteRecord(index) }}><DeleteOutlineIcon /></button></TableCell>
                <TableCell>{item.Fname}</TableCell>
                <TableCell>{item.Lname}</TableCell>
                <TableCell><input name='batchNumber'{...register("batchNumber")} className='border border-black' ref={Firsttextfeild}  onKeyDown={(e) => handleOpen(e)} /></TableCell>
                <TableCell><input className='border border-black' /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <div>

        <DetailModal open={open} setOpen={setOpen} selectedRowData={selectedRowData} setSelectedRowData={setSelectedRowData}/>
      </div>
    </div>

  )
}

export default MainTabel