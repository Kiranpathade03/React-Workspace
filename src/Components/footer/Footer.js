import React from 'react'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className='bg-[#e7e7e7] md:grid grid-cols-4 p-10 '>
            <div>
                <p className='font-bold font-Arial Narrow'>Vision</p>
                <p>Creativity, Expression, & Exploration</p>
            </div>
            <div>
                <p className='font-bold'>Pages</p>
                <p> About US</p>
                <p>Contact us</p>
                <p>Terms and condition</p>
                <p>Privacy policy</p>
                <p>Refunds/Cancellations/Shipping Policy</p>
                <p>FAQ</p>
            </div>
            <div>
                <p className='font-bold'>My Accounts</p>
                <p>Login</p>
                <p>Register</p>
                <p>Track Order</p>
            </div>
            <div>
                <p className='font-bold'>Follow us</p>
                <p><XIcon fontSize='small'/>Twitter</p>
                <p><InstagramIcon fontSize='small'/>Instgram</p>
                <p><YouTubeIcon/>You Tube</p>
            </div>
            

        </div>
    )
}

export default Footer