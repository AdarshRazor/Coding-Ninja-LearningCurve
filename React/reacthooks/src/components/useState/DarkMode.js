import React, { useState } from 'react'

function DarkMode() {
    
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    } )


    // let myStyle = {
    //     color: 'black',
    //     backgroundColor: 'cyan'
    // }
    
    const [btntext, setbtntext] = useState("Enable Dark Mode")

    const [alertVisible, setAlertVisible] = useState(false);


    const darkmode = () => {
        console.log('Dark Mode')
        if(myStyle.color === 'black'){
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable Light Mode")
            setAlertVisible(true);

        }else{
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark Mode")
            setAlertVisible(true);
        }

        setTimeout(() => {
            setAlertVisible(false);
        }, 1000);
    }
  
    return (
    <>
    {alertVisible && (<div className="alert alert-success alert-dismissible fade show" role="alert">
        {btntext === "Enable Dark Mode" ? "Enabled Light Mode" : "Enabled Dark Mode"}
    </div>)}
    <div className='container my-3' style={myStyle}>
    <h2>About us</h2>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    <button type="button" className="btn btn-secondary my-3" onClick={darkmode}>{btntext}</button>
    </div>
    </>
  )
}

export default DarkMode