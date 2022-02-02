import React from 'react'
import {
  Modal,
  Button} from "react-bootstrap" 
function Login ({
    showLogin,handleCloseLogin
}){
    return (
        <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Email</p>
          <input></input>
          <p>Password</p>
          <input></input>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    )
}

export default Login;