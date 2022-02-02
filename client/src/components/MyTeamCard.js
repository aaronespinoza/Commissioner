import React, { useState, useEffect } from 'react'
import API from "../utils/nbaAPI"
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 



function MyTeamCard (props) {

    
return(
    <Container>
        <Row lg={4}>
    <Card className="myTeam">
    <Card.Body >{props.teamName} <img src={props.teamLogo} alt='team logo'/></Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default MyTeamCard; 