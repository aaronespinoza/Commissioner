import React, { useState, useEffect } from 'react'
import API from "../utils/nbaAPI"
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function WinsCard (props) {

   


    
return(
    <Container>
        <Row lg={4}>
    <Card className="WinsCard">
    <Card.Body >Team Wins {props.wins} </Card.Body>
    <Card.Body >Team Losses {props.losses} </Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default WinsCard; 