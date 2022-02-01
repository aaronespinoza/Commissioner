import React from 'react'
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function MyTeamCard () {
return(
    <Container>
        <Row lg={4}>
    <Card className="myTeam">
    <Card.Body >MY TEAM</Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default MyTeamCard; 