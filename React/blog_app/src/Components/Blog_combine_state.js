//Blogging App using Hooks
import {useState} from 'react'
export default function Blog(){
    
    const [formData, setformData] = useState({title: "", content: ""});
    //empty array to hold our title and content
    const [blogs, setblogs] = useState([]);


    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        // Rest Operator in JS [...]
        setblogs([{title: formData.title, content: formData.content},...blogs]);
        // now we need to clear the input fields
        setformData({title: "", content: ""});
    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                onChange = {(e) => setformData({title: e.target.value, content: formData.content})}
                                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value = {formData.content}
                                onChange = {(e) => setformData({title: formData.title, content: e.target.value})}
                                />
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i)=>(
            <div className='blog' key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
            </div>
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
