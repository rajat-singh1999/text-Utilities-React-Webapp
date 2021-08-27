import React from 'react'

export default function About(props) {
    
    let textColor="black"
    let backColor="white"

    if(props.mode === "dark"){
        backColor="#191919";
        textColor="white";
    }
    else if(props.mode === "green"){
        backColor="#198754";
        textColor="white";
    }
    else if(props.mode === "grey"){
        backColor="grey";
        textColor="white";
    }
    else{
        textColor="black"
        backColor="white"
    }
    // if(props.mode === "dark"){
    //     set{color: 'white', backgroundColor: "#191919"}({color:"white", backgroundColor:"#191919"})
    // }

    return (
        <div className="conatainer" style={{color: textColor, backgroundColor: backColor}}>
            <h1 className="my-3 mx-3">About this tool</h1>
            <div className="accordion container" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={{color: textColor, backgroundColor: backColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color: textColor, backgroundColor: backColor}} >
                    You can analyze text and perform various actions to your text using this tool.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={{color: textColor, backgroundColor: backColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Developed using?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color: textColor, backgroundColor: backColor}} >
                This tool is developed using the REACT.js, a very famous frontend component based framework.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={{color: textColor, backgroundColor: backColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Does this tool use a backend?
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color: textColor, backgroundColor: backColor}} >
                    This tool as of now does not use a backend for text formating or anyother task. It does all the text manipulation directing in your browser using javascript.
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
