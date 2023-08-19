import React, { useState } from 'react';
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email, password);
      // User signed in successfully
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <Container>
    <Row className="mt-5 justify-content-md-center">
      <Col md={6}>
        <h1>Login</h1>
        <Form onSubmit={handleSignIn} >
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
  );
}

export default SignIn;