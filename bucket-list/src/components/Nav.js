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
    <Button variant="dark" onClick={props.handleShowLogin}>Login</Button>
    <Nav.Link href="#features"onClick={props.handleShow}>Sign Up</Nav.Link>
  </Nav>
  </Container>
</Navbar>
)
 
  }

  export default Navigation;