import React from 'react'
import { Breadcrumbs } from '@mui/material'
import Link from '@mui/material/Link';
import Iphone from '../phones/Iphone';

function SecondNav({name}) {
  return (
    <div>
          <div className='mx-5' role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        to='/'
                    >
                       Collections
                    </Link>
                    <Link
                        underline="hover"
                        color="text.primary"
                      to='iphone'
                        aria-current="page"
                    >
                       {name}
                    </Link>
                </Breadcrumbs>
            </div>
    </div>
  )
}

export default SecondNav;