import React, { useState } from "react";

export default function TextForm(props) {
  const Clickedtouppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const Clickedtolowercase = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const Clickedtocopy = () => {
  const text=document.getElementById('exampleFormControlTextarea1');
  text.select();
  navigator.clipboard.writeText(text.value);
  }
  
  const ClearText=()=>{
    let newText="";
    setText(newText);
  }
  const Onchanged = (event) => {

     
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter a Text");
  return (
    <>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={Onchanged} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className="btn btn-primary my-3" onClick={Clickedtouppercase}>Click To UpperCase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={Clickedtolowercase}>Click To Lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={Clickedtocopy}>Copy to ClickBoard</button>
        <button className="btn btn-primary my-3 mx-3" onClick={ClearText}>Clear Text</button>
      </div>
      <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p> {0.008 * text.split(" ").length} Minutes to Read </p>
        <h3>Text Preview</h3>
        <p className="border p-3">{text} </p>
      </div>
    </>
  );
}
