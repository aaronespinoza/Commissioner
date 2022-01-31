import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import {Card, 
  Navbar, 
  Container, 
  Nav} from "react-bootstrap"

import img from './images/signIn.png'
// import img1 from './images/teamSelect.jpg'
=======
import {Card, Navbar} from "react-bootstrap"
import img from './images/test.png'
>>>>>>> 1b7aa66e538f254dec111796b40360d73ab70e3c

function App() {
  return (
    <div>
<<<<<<< HEAD

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

=======
>>>>>>> 1b7aa66e538f254dec111796b40360d73ab70e3c
   <Card styles={{height:'300px'}}className="bg-dark text-white">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      Leaving this here in case we need text
    </Card.Text>
<<<<<<< HEAD
    <Card>
  <Card.Body >This is some text within a card body.</Card.Body>
</Card>
=======
    
>>>>>>> 1b7aa66e538f254dec111796b40360d73ab70e3c
  </Card.ImgOverlay>
</Card>
    </div>
  );
}


export default App;
