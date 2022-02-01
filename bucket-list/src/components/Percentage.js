import React from 'react'
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function Percentage () {
return(
    <Container>
        <Row lg={4}>
    <Card className="Percentage">
    <Card.Body >Win % | Win Streak</Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default Percentage; 