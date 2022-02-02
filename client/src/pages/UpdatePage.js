
import React from 'react';import React from "react";
// import "./UpdatePage.css";
// import img3 from "../images/UpdateUser.png";
//we import the mutations from the 
//utils on the client end
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../utils/mutations';
import { UPDATE_TEAM } from '../utils/mutations';

import React from 'react';
// import "./UpdatePage.css";
import img3 from "../images/UpdateUser.png";


import {
  
   } from "react-bootstrap";

const UpdatePage = () => {
  const [deleteUser, { error }] = useMutation(REMOVE_USER);
  const [changeTeam, { error }] = useMutation(UPDATE_TEAM);

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
  
  };
    return(

    <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
        >
        
    </div>
 

    );
}




export default UpdatePage;

  

