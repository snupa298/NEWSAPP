import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      console.log('User created successfully');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <Container>
    <Row className="mt-5 justify-content-md-center">
      <Col md={6}>
        <h1>Register</h1>
        <Form  onSubmit={handleSignUp}>
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
  );
}

export default SignUp;