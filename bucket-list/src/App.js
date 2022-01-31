import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, 
  Navbar, 
  Container, 
  Nav,
  Row,
  Col} from "react-bootstrap"


// import img1 from './images/teamSelect.jpg'

function App() {
  return (
    <div>

  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#features">Sign Up</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


<Row className="justify-content-md-center">
      <Col md={6}>
    <Card styles={{height:'300px!important'}} className="test">
  <Card.Body >This is some text within a card body.</Card.Body>
</Card>
</Col>
</Row>
    </div>
  );
}


export default App;
