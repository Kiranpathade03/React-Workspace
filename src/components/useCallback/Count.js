 import React from 'react'
 
 
 function Count({count, text}) {
    console.log("count call",text);
   return (
     <div>
        {count}
     </div>
   )
 }
 
 export default React.memo(Count);