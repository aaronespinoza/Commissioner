import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import {
  Modal,
  Button,
  Form
} from "react-bootstrap" 

function Login ({showLogin,handleCloseLogin})
{

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

    return (
        <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
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
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
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
      
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
      </Modal.Dialog>
      </Modal>
    )
}

export default Login;