import React from 'react'

export default function TextForm() {
    return (
        <>
        <div className="container my-3">
            <h1>Enter the text below to analyze!</h1>
            <div className="mb-3">
            <textarea className="form-control" id="my-box" rows="10"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
        </>
    )
}
