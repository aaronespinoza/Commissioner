import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import SearchPage from './Pages/SearchPage/SearchPage';


function App() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShow = () => setShow(true);
  const handleShowLogin = () => setShowLogin(true);
  return (
    <SearchPage/>
//   <>

// <div className="mainBg">

//   <div className="SearchBg">


//  <Nav handleShow={handleShow} handleShowLogin={handleShowLogin}></Nav>

//      <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin}></Login>
//      <SignUp show={show} handleClose={handleClose}></SignUp>
 
//     </div>

//     </div>
// </>
  );

}


export default App;
