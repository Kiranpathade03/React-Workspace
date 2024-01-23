import React from 'react'
import iphone from "../assets/selectyourbrand/iphone.png"
import Xiomi from "../assets/selectyourbrand/Xiomi.png"
import google from "../assets/selectyourbrand/google.png"
import oneplus from "../assets/selectyourbrand/oneplus.png"
import realme from "../assets/selectyourbrand/realme.png"
import samsung from "../assets/selectyourbrand/samsung.png"
import Nothing from "../assets/selectyourbrand/Nothing.png"
import oppo from "../assets/selectyourbrand/oppo.png"
import vivo from "../assets/selectyourbrand/vivo.png"
import poco from "../assets/selectyourbrand/poco.png"

function SelectYourBrands() {
    const Company = [
        { Brand: iphone, Name: "iPhone" },
        { Brand: Xiomi, Name: "Xiomi" },
        { Brand: google, Name: "Xiomi" },
        { Brand: oneplus, Name: "Xiomi" },
        { Brand: realme, Name: "Xiomi" },
        { Brand: samsung, Name: "Xiomi" },
        { Brand: Nothing, Name: "Xiomi" },
        { Brand: oppo, Name: "Xiomi" },
        { Brand: vivo, Name: "Xiomi" },
        { Brand: poco, Name: "Xiomi" },
      ]
  return (
    <div>
        <div>
        <h2 class="title center p-15  font-normal mt-7 text-center ">
          Select Your Brand
        </h2>
        <div className='overflow-x-auto  overflow-hidden'>
         
          {/* <marquee behavior="scroll" direction="left"> */}
          <div className='flex space-x-5 mx-4 mt-3 font'>
            {Company.map((item, index) => (
              <>
                <img
                  key={index}
                  src={item.Brand}
                  className='w-16 rounded-full md:w-32 md:h-32 md:rounded-full border border-b-gray-700 flex-shrink-0'

                />


              </>))}
          </div>
             {/* </marquee> */}

        </div>

      </div>
    </div>
  )
}

export default SelectYourBrands