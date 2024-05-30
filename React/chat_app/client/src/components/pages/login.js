import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import '../styles/login.css'

function Login() {
  return (
    <>
          <Form className='my-4'>

          <h1>Login</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Shhh... 🤫 Make sure no one is watching 
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
              <Alert variant='danger' className='m-3'>
                This is a alert—check it out!
              </Alert>
          </Form>
    </>
  )
}

export default Login