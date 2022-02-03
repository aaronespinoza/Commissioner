import React from 'react'
import {
    Card,

  

   } from "react-bootstrap" 

function Roster (props) {
return(

    <Card className="Roster">
    <Card.Body>Team Logo<img id="logo" src={props.teamLogo} alt='team logo'/></Card.Body>
    </Card>
  
   

)
}


export default Roster; 

