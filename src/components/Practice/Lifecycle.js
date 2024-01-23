
// *******************state use in render  method
// import { render } from '@testing-library/react'
// import React from 'react'

//  class Lifecycle extends React.Component{
//  constructor(){
//     super();
//     this.state={
//         Email:"Kiran@123"

//     }
//  }
//     render(){
//         console.log(this.state.Email);
//         return(
//             <div>
//                 <h1>Hello</h1>
//                 <button onClick={()=>{this.setState({Email:"KIranpathade"})}}>Click</button>
//              </div>
//         )
//     }
//  }
//  export default Lifecycle;

//**************************Component Didmount */
import { render } from '@testing-library/react'
import React from 'react'

 class Lifecycle extends React.Component{
  constructor(){
    super();
    this.state={
        name:'kiran'
    }
   
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  render(){
    console.log("render");
    return(
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={ ()=>{this.setState({name:"shubham"})}}>change</button>
        </div>
    )
  }
 }
 export default Lifecycle;