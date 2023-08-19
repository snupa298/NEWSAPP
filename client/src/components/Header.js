import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Header = () => {
const user=auth.currentUser;
const navigate=useNavigate();
  return (
    <div>
  
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">NewsApp</Navbar.Brand>
          <Nav className="me-auto">
             {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link> */}
            <Nav.Link  href="#pricing">{user ? "Hi, " + user.email : "Hi, Guest"}</Nav.Link> 
          </Nav>
          {user === null ? (
          <button className="btn btn-outline-light" onClick={() => navigate()}>
            Sign In
          </button>):  (<button className="btn btn-outline-light" onClick={() => auth.signOut()}>
            Sign Out
          </button>)}
        </Container>
      </Navbar>
     
   
    </div>
  )
}

export default Header
