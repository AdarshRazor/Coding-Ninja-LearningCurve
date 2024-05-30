import React, { useContext, useState } from 'react';
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';
import '../styles/register.css';
import { AuthContext } from '../../context/AuthContext';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {registerInfo} = useContext(AuthContext)

  return (
    <>
      <Form className='my-4'>
        <h1>Register</h1>

        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
          <Form.Text className="text-muted">
            Make it unique 🙄
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Alert variant='danger' className='m-3'>
          This is an alert—check it out!
        </Alert>
      </Form>
    </>
  );
}

export default Register;
