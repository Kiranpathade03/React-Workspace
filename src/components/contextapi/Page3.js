import React, { useContext } from 'react';
import { Button } from '@mui/base/Button';
import { NewContext } from './NewContext';

function Page3() {
  const [data, setData] = useContext(NewContext);
  console.log("page3", data);

  return (
    <div className='mt-24'>




     <div>
     {data.map((item) => {
        return (
          <div className='text-center border'>
            <p>Name of Customer :- {item.Name}</p>
            <hr />
            <p>Email - {item.Email}</p><hr />
            <p>Phone No - {item.Phoneno}</p><hr />
            <p>Address - {item.Address}</p><hr />
            <p>Payment Method - {item.radio}</p>

          </div>
        )
      })}
     </div>
      <div className='flex flex-col items-center '>
        <h2>Fill OTP And Place Order...</h2>

        <input
          type="text"
          placeholder='Please fill OTP here'
          id="phoneno"
          name="phoneno"
          className="mt-10 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <button className='bg-green-700 p-2 rounded w-24 mt-12 text-white'>Verify</button>
      </div>
    </div>
  );
}

export default Page3;
