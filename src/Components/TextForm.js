import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    let disable = "disabled"
    if(text.length!==0){
        disable="";
    }
    const handleUpClick = ()=>{
        console.log('UpperCase was clicked!')
        setText(text.toUpperCase())
        props.showAlert("All letters set to upper-case!", "success");
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("All letters set to lower-case!", "success");
    }

    const handleAltClick = ()=>{
        let temp = ""
        for(let i=0;i<text.length;i++){
            if(text[i]===text[i].toUpperCase()){
                temp = temp+text[i].toLowerCase()
            }
            if(text[i] === text[i].toLowerCase()){
                temp = temp+text[i].toUpperCase()
            }
        }
        setText(temp)
        props.showAlert("Alternate case action performed.", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to the clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed from the text.", "success");
    }

    const handleClearClick = ()=>{
        setText("")
        props.showAlert("Text has been cleared!", "warning");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className="container">
            <h2>Enter the text below to analyze!</h2>
            <div className="mb-3">
            <textarea className="form-control" id="my-box" onChange={handleOnChange} value={text} rows="10"></textarea>
            </div>
            <button className={`btn btn-primary mx-2 my-2 ${disable}`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-primary mx-2 my-2 ${disable}`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className={`btn btn-primary mx-2 my-2 ${disable}`} onClick={handleAltClick}>Convert to AlternateCase</button>
            <button className={`btn btn-primary mx-2 my-2 ${disable}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className={`btn btn-primary mx-2 my-2 ${disable}`} onClick={handleCopy}>Copy Text</button>
            <button className={"btn btn-danger mx-2 my-2 "+disable} onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters.</p>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes read.</p>
            <h2>{text.length===0?"Enter text to preview here...":"Preview"}</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
