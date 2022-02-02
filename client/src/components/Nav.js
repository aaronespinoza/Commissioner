import React from 'react'
import Login from './Login';
import SignUp from './SignUp';

import { 
    Navbar, 
    Container, 
    Nav,
  Button} from "react-bootstrap"

  function Navigation(props){

return(
    <Navbar bg="dark" variant="dark">
  <Container>
  <Nav className="me-auto">
    <Button variant="dark" onClick={props.handleShowLogin}>Login</Button>
    <Nav.Link href="#features"onClick={props.handleShow}>Sign Up</Nav.Link>
  </Nav>
  <Login showLogin={props.showLogin} handleCloseLogin={props.handleCloseLogin}/> 
  <SignUp show={props.show} handleClose={props.handleClose} />
  </Container>
</Navbar>
)
 
  }

  export default Navigation;