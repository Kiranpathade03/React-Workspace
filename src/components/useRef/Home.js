import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import MainTabel from './MainTabel'



function Home() {
    const [Detail, setDetail] =useState( [
        {
            Fname: 'Kiran',
            Lname: 'Pathade',

        }
    ])
    return (
        <div>

            <MainTabel Detail={Detail} setDetail={setDetail} />
        </div>
    )
}

export default Home