import e from 'express'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

const signIn = ()=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential)
    })
    .catch((error)=>{
        console.log(error)
    })
}

  return (
    <Container>
    <Row className="mt-5 justify-content-md-center">
      <Col md={6}>
        <h1>Login</h1>
        <Form noValidate onSubmit={signIn} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type='submit'>Login</Button>
          <Row className="pb-2">
            <Col>
              Don't you have an account?
              <Link to={"/register"}> Register </Link>
            </Col>
          </Row>

        
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default Login
