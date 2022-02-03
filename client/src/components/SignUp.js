import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
  Modal,
  Button,
  Form
} from "react-bootstrap" 
function SignUp ({show,handleClose})

{

  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', favoriteTeam: '', password: '' });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
      
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

    //   Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      firstName: '', lastName: '', email: '', favoriteTeam: '', password: '' 
    });
  };
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User SignUp</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        {data ? (
              <p>
                Success! You may now head{' '}
                {/* <Link to="/">back to the homepage.</Link> */}
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                 <input
                  className="form-input"
                  placeholder="firstname"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="lastname"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
               
                 <input
                  className="form-input"
                  placeholder="favoriteteam"
                  name="favoriteTeam"
                  type="text"
                  value={formState.favoriteTeam}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </Modal.Body>
      

      </Modal.Dialog>
      </Modal>
    )
}

export default SignUp;