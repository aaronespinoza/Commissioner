import React from 'react'
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
    <Button variant="dark" onClick={props.handleShow}>Login</Button>
    <Nav.Link href="#features">Sign Up</Nav.Link>
  </Nav>
  </Container>
</Navbar>
)
 
  }

  export default Navigation;