 import React, { Children } from 'react'
 
 function Button({onClick, type ,children }) {
  console.log("button is call");
   return (
     <div> 
      <button onClick={onClick} type={type}>{children}</button>
     </div>
   )
 }
 
 export default React.memo(Button);