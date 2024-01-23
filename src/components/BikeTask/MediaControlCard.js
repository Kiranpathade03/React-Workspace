import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import bikerepair from '../assets/BikeTask/bikerepair.png'

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <div className=' '>
      <Card sx={{ display: 'flex', height: '240px' }} className='border'>
        <CardMedia
          component="img"
          sx={{ width: 230 }}
          image={bikerepair}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <h5 className='font-medium ml-7 mt-6'>Perodic Maintanance</h5>

          <div className='flex ml-7'>
            <div className=''>
              <h6>Engine</h6>
              <div className='grid grid-cols-2 text-xs'>
                <li>Oil change</li>
                <li>Clean Oil filter</li>
                <li>Clean Carborator</li>
                <li>Spark Plug check</li>
              </div>
            </div>
            <div className=''>
              <h6>Engine</h6>
              <div className='grid grid-cols-2 text-xs'>
                <li>Oil change</li>
                <li>Clean Oil filter</li>
                <li>Clean Carborator</li>
                <li>Spark Plug check</li>
              </div>
            </div>
            
          </div>
          <div className='flex ml-7'>
            <div className='mt-2'>
              <h6>Engine</h6>
              <div className='grid grid-cols-2 text-xs'>
                <li>Oil change</li>
                <li>Clean Oil filter</li>
                <li>Clean Carborator</li>
                <li>Spark Plug check</li>
              </div>
            </div>
            <div className='mt-2'>
              <h6>Engine</h6>
              <div className='grid grid-cols-2 text-xs'>
                <li>Oil change</li>
                <li>Clean Oil filter</li>
                <li>Clean Carborator</li>
                <li>Spark Plug check</li>
              </div>
            </div>
            
          </div>
        </Box>

      </Card>
    </div>
  );
}
