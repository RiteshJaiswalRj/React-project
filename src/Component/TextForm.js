import React, { useState } from "react";



export default function TextForm (props) {

    const handleUpClick = () =>{
        console.log('UpperCase was Clicked' + text);
        let change = text.toUpperCase();
        setText(change);
    }
    const handledownClick = () =>{
        console.log('LowerCase was Clicked' + text);
        let change = text.toLowerCase();
        setText(change);
    }
    const Clearall = () =>{
        console.log('LowerCase was Clicked' + text);
        let change = '';
        setText(change);
    }
    const handleonchange =(event) =>{
        console.log('On Change Clicked');
        setText(event.target.value);
    }

    const hardcopy = (event) =>{
      var text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handlespace = (event) =>{
      // var res = document.getElementById('mybox');
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(' '));
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color : props.mode ==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey': 'white', 
        color : props.mode === 'dark' ? 'white': '#042743'}}  id="mybox"rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper</button>&nbsp;
      <button className="btn btn-primary" onClick={handledownClick} >Convert to Upper</button>&nbsp;
      <button className="btn btn-primary" onClick={Clearall} >Clear All Text. </button>&nbsp;
      <button className="btn btn-primary" onClick={hardcopy} >Copy All Text. </button>&nbsp;
      <button className="btn btn-primary" onClick={handlespace} >Remove Extra Space. </button>
    </div>
    <div  className="container my-3" style={{color : props.mode === 'dark' ? 'white': '#042743'}}>
      <p>{text.split(" ").length} words and {text.length} Characters. </p>
      <p>{0.008 * text.split("").length} Minutes read</p>
      <p>Preview</p>
      <p>{text.length>0 ? text : "Enter Something to see the Preview."}</p>
    </div>
    </>);
}
