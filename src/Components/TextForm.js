import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter The Text Over Here');
    // var textChange=setText('');
    const handleClick=()=>{
        console.log('clicked',text)
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log('Onchange Click');
        setText(event.target.value);
    }
    const handleLowerClick=() =>{
        const newLowerText=text.toLowerCase();
        setText(newLowerText);
    }
    const handleClearClick=()=>{
        const content='';
        setText(content);
    }
  return (
    <>
    
  <div className="container">
  <div className="form-group my-3">
    <h1>{props.heading}</h1>
    <label htmlFor="myBox"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.color==='dark'?'black':'white',color:props.color==='dark'?'white':'black'}}></textarea>
  </div>

<button className="btn btn-primary mx-2" onClick={handleClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

<div className="container my-3">
    <h1>Your text Summary</h1>
    <p>Countof words is {text.split(" ").length} and letters is {text.length}</p>
    <p>Time to read is <b>{0.08 * text.split(" ").length}</b></p>
    <h1>{text.length===0 ? 'Enter a text in textbox' : 'Preview :-' }</h1>
    <p> {text} </p>
</div>
</div>
    </>
  )
}
