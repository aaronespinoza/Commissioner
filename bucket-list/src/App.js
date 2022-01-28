import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Navbar} from "react-bootstrap"
import img from './images/test.png'

function App() {
  return (
    <div>
   <Card styles={{height:'300px'}}className="bg-dark text-white">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      Leaving this here in case we need text
    </Card.Text>
    
  </Card.ImgOverlay>
</Card>
    </div>
  );
}


export default App;
