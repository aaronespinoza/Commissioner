import React, { useState } from 'react'
import {
  Modal,
  Button} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';



function SignUp ({
    show,handleClose
})
{

  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteTeam: ''
  }) // state of the form on page load
  
  const [addUser, {error}] = useMutation(ADD_USER);
  
  const handleInputChange= (event) => {
    const {name, value} = event.target;
    setUserFormData({...userFormData, [name]: value});
  }
  
  const handleFormSubmit = async(event) => {
    event.preventDefault();
  
    const form = event.currentTarget;
    try {
      const {data } = await addUser({
        variables: {...userFormData},
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch(err) {
      console.error(err)
    }
  
    setUserFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      favoriteTeam: ''
    })
  }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User SignUp</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>First Name</p>
          <input name="firstName" type="text" onChange={handleInputChange} value={userFormData.firstName}></input>
          <p>Last Name</p>
          <input name='lastName' type="text" onChange={handleInputChange} value={userFormData.lastName}></input>
          <p>Email</p>
          <input name="email" type="text"  onChange={handleInputChange} value={userFormData.email}></input>
          <p>Password</p>
          <input name="password" type="password" onChange={handleInputChange} value={userFormData.password}></input>
          <p>Favorite Team</p>
          <input name="favoriteTeam" type="text"  onChange={handleInputChange} value={userFormData.favoriteTeam}></input>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleFormSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    )
}

export default SignUp;