import React from 'react'

function Home() {
    return (
        <div>

            <div>
                <nav className='bg-slate-600 w-full fixed'>
                    <label className='text-white leading-[80px] pl-12 md:pl-24 md:text-4xl text-3xl'>Logo</label>
                    <ul className='float-right mr-10 flex leading-[80px] space-x-4 text-white uppercase rounded'>
                        <li>Mobile Skin</li>
                        <li>Laptop Skin</li>
                        <li>Skin Collection</li>
                        <li>Skin Collection</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Home