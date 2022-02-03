

import React, { useState } from 'react';
// import "./UpdatePage.css";
// import img3 from "../images/UpdateUser.png";
//we import the mutations from the 
//utils on the client end
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../utils/mutations';
import { UPDATE_TEAM } from '../utils/mutations';

import Auth from '../utils/auth';





// import "./UpdatePage.css";
import img3 from "../images/UpdateUser.png";
import TeamSelect from "../components/TeamSelect";


import {
  Form,
  Button,
  FormSelect,
} from "react-bootstrap";



const UpdatePage = (props) => {

  const [deleteUser, { error }] = useMutation(REMOVE_USER);
  const [updateTeam, { teamerror }] = useMutation(UPDATE_TEAM);
  const [formState, setFormState] = useState({ favoriteTeam: '' });

  // const handleChangeTeam = async (favoriteTeam) => {

    //Delete user form

    const handleDeleteUser = async (event) => {
      const token = Auth.getProfile()
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await deleteUser({
          variables: { ...formState },
        });

        //   Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    }
    //update on form changes
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    // submit update team form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      const user = Auth.getProfile()
      console.log(user)
      try {
        const { data } = await updateTeam({
          variables: {
            
            ...formState,
          id: user.data._id
          },
        });

           Auth.login(data.updateTeam.token);
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        favoriteTeam: '',
      });
    };
    console.log(formState);
    return (
      <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="card-header bg-dark text-light p-2"></div>
        <div className="card-body">

          <Form onSubmit={handleFormSubmit}>
            <TeamSelect setState={setFormState} state= {formState}/>
            
            <Button
              className="btn btn-block btn-primary"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </Button>
      

          </Form>
          <Button
              className="btn btn-block btn-primary bg-danger"
              style={{ cursor: 'pointer' }}
            
            >
              Delete Profile
            </Button>



          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>



    );


  
};





export default UpdatePage;