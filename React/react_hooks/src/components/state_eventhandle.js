import React, {useState} from 'react'

function StateEventhandleClass(props) {

    const [text, setText] = useState("Enter text here");

    const handleuppclick = () => {
        //console.log("Uppercase was clicked");
        const newtext = text.toUpperCase()
        setText(newtext);

    }

    // use to type 
    const handleonChange = (event) => {
        setText(event.target.value);
    }


  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="mytext" rows="3" value={text} onChange={handleonChange}></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleuppclick}>convert to Uppercase</button>
    </>
  )
}

export default StateEventhandleClass
