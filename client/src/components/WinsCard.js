import React from 'react'
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function WinsCard () {
return(
    <Container>
        <Row lg={4}>
    <Card className="WinsCard">
    <Card.Body >Team Wins | Team Losses</Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default WinsCard; 