import React, { useState } from "react";
import {useNavigate }  from "react-router-dom";

function Signup(props) {
  const [credentials, setcredentials] = useState({name: "", email: "", password: ""});
  let history = useNavigate();

  const handSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle form submission
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authToken);
      localStorage.setItem('userName', json.user.name); // Save user name
      history("/");
      props.showAlert("Account created successfully", "success")
    } else {
      // display error message
      props.showAlert("Invalid credentials", "danger")
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Signup Please</h2>
      <form onSubmit={handSubmit}>
        <div class="form-group my-2">
          <label for="name">Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onChange}
          />
        </div>
        <div class="form-group my-3">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div class="form-group my-2">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        {/* <div class="form-group my-2">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </div> */}
        <button type="submit" class="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
