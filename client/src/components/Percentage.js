import React, { useState, useEffect } from 'react'
import API from "../utils/nbaAPI"

import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 

function Percentage () {

    const [team, setTeam] = useState();
    const [standing, setStandings] = useState();

useEffect( () => {
    API.search("Lakers")
    .then(res=>{
        console.log(res)
        setTeam(res.data.api.teams[0])

        

        API.record(res.data.api.teams[0].teamId)
        .then(res=>{
            console.log(res)
            setStandings(res.data.api.standings[0])
        })
})
}, [])



return(
    <Container>
        <Row lg={4}>
    <Card className="Percentage">
    <Card.Body >Win %: {standing.winPercentage}  | Win Streak: {standing.winStreak}</Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default Percentage; 