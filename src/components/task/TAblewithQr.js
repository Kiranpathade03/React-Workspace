import React from 'react'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TextField from '@mui/material/TextField'
import TableBody from '@mui/material/TableBody'
import QRCode from 'react-qr-code'
function TAblewithQr() {
    const Tabledata = [
        {
            FName: "kiran",
            LName: "Pathade",
            Education: "FullStack Developer",
            BirthYear: 2002
        },
        {
            FName: "Shubham",
            LName: "More",
            Education: "FullStack Web Developer",
            BirthYear: 2003

        },
        {
            FName: "Sanket",
            LName: "Parhe",
            Education: "FullStack Java Developer",
            BirthYear: 2003

        },
        {
            FName: "Yogesh",
            LName: "Wakchaure",
            Education: "FullStack Web Developer",
            BirthYear: 2002

        },
        {
            FName: "Abhishek",
            LName: "Wable",
            Education: "FullStack Java Developer",
            BirthYear: 2002

        },
        {
            FName: "Bharat",
            LName: "Raut",
            Education: "FullStack Web Developer",
            BirthYear: 2003

        },
    ]
    const collectdate = (value, index) => {
        console.log(index, value);
    }
    return (
        <div className='flex'>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='left' style={{ backgroundColor: 'black', color: 'white' }}> <input type='checkbox' /></TableCell>
                        <TableCell align='left' style={{ backgroundColor: 'black', color: 'white' }}>First Name</TableCell>
                        <TableCell align='left' style={{ backgroundColor: 'black', color: 'white' }}>Last Name</TableCell>
                        <TableCell align='left' style={{ backgroundColor: 'black', color: 'white' }}>Education</TableCell>
                        <TableCell align='left' style={{ backgroundColor: 'black', color: 'white' }}>Birth Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {Tabledata.map((item, index) => {
                        return (

                            <>
                                <TableRow>
                                    <TableCell ><input onClick={() => collectdate('Checked', index)} type='checkbox' /></TableCell>
                                    <TableCell>{item.FName}</TableCell>
                                    <TableCell>{item.LName}</TableCell>
                                    <TableCell>{item.Education}</TableCell>
                                    <TableCell>{item.BirthYear}</TableCell>
                                </TableRow>
                            </>
                        )
                    })}
                </TableBody>

            </Table>
            <div>
                 
            </div>
        </div>
    )
}

export default TAblewithQr