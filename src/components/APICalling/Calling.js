import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Calling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.countrystatecity.in/v1/countries/IN')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
console.log(data);
  return (
    <div> 
      {data.map((items)=>{
        return(
          <div>
            <p>{items.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Calling