import React from 'react'
import { useState } from 'react'

export default function TextForm() {
    const handleUpClick = ()=>{
        console.log('UpperCase was clicked!')
        setText(text.toUpperCase())
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase())
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h2>Enter the text below to analyze!</h2>
            <div className="mb-3">
            <textarea className="form-control" id="my-box" onChange={handleOnChange} value={text} rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{(text.length===0)?0:(text.split(" ").length)} words, {text.length} characters.</p>
            <p>{(text.length===0)?0:(0.008 * text.split(" ").length)} minutes read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
