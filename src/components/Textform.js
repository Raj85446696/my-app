import React ,{ useState } from "react";

export default function Textform(props) {
    const handleUpClick =()=>{
        console.log("Uppercase Was Click"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleOpClick =()=>{
        console.log("Uppercase Was Click"+text);
        let newtext = text.toLowerCase();
        setText(newtext); 
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText] = useState();
    // text = "new text"; //Wrong way to change the state
    // setText = "new text"; //Correct way to change the state
  return (
    <div className="container">
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label"></label>
    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} placeholder="enter text here"></textarea>
    </div>
    <div className="button-container">
    <button className='btn btn-primary'onClick={handleUpClick}>Convert To UpperCase</button>
    <button className='btn btn-danger'onClick={handleOpClick}>Convert To LowerCase</button>
    </div>
    </div>
  )
}

