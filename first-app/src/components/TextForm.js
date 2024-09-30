import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleClearClick =()=>{
    let newText = '';
    setText(newText)

  }


  const handleSoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }


  const handleOnChange = (event)=>{
    setText(event.target.value)
  }


  const [text, setText] = useState('');

  return (
    <>
      <div> 
        <h1>{props.heading}</h1>
         <div className="mb-3">
        <textarea className="form-control"  value ={text} onChange ={handleOnChange} id="box" rows="10"></textarea>
        </div>
        <button  className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleSoClick}>convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
     </div>

     <div className='container my-3'>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008* text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
     </div>
     </>
  )
}
