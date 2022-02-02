import React, { useState, useEffect } from 'react'
import API from "../utils/nbaAPI"
import {
    Card,
    Container,
    Row,
   } from "react-bootstrap" 



function MyTeamCard () {

    const [team, setTeam] = useState();

    useEffect( () => {
        API.search("Lakers")
        .then(res=>{
            console.log(res)
            setTeam(res.data.api.teams[0])
        })
    
    }, [])


return(
    <Container>
        <Row lg={4}>
    <Card className="myTeam">
    <Card.Body >{team.fullName} <img src={team.logo} alt='team logo'/></Card.Body>
    </Card>
    </Row>
    </Container>
   

)
}


export default MyTeamCard; 