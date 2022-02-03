import React from 'react';
// import "./UpdatePage.css";
// import img3 from "../images/UpdateUser.png";
//we import the mutations from the 
//utils on the client end
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../utils/mutations';
import { UPDATE_TEAM } from '../utils/mutations';

// import "./UpdatePage.css";
import img3 from "../images/UpdateUser.png";


import {
  Form,
  Button,
   } from "react-bootstrap";

const UpdatePage = () => {
  const [deleteUser, { error }] = useMutation(REMOVE_USER);
  const [changeTeam, { teamerror }] = useMutation(UPDATE_TEAM);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChangeTeam = async (favoriteTeam) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await changeTeam({
        variables: { bookData: { ...bookToSave } },
      });
      console.log(savedBookIds);
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
// submit update team form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

    //   Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
    return(

    <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
        >
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
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
          </div>
    </div>
 

    );
}




export default UpdatePage;