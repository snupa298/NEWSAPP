import React from 'react'
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'

const Register = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const signUp = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
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
        <h1>Register</h1>
        <Form  onSubmit={signUp}>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your email"
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
              minLength={6}
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
         
            />
           
  </Form.Group>

          <Button type="submit">
         Register
          </Button>
         
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default Register
