import React, { useState, useEffect } from 'react'
import API from "../utils/nbaAPI"

import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function Percentage (props) {

   

return(
    <Container>
        <Row lg={4}>
    <Card className="Percentage">
    <Card.Body >Win %: {props.winPercentage}</Card.Body>
    <Card.Body >Win Streak: {props.winStreak}</Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default Percentage; 