import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Nav from './components/Nav'


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>

<div className="mainBg">


 <Nav handleShow={handleShow}></Nav>

     <Login show={show} handleClose={handleClose}></Login>
 
    </div>
</>
  );
  
}


export default App;
