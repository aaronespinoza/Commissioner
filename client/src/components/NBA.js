import React, { useState, useEffect } from 'react';
import API from "../utils/nbaAPI"

function NBA() {

    const [team, setTeam] = useState();
    const [player, setPlayers] = useState();
    const [standing, setStandings] = useState();

useEffect( () => {
    API.search("Lakers")
    .then(res=>{
        console.log(res)
        setTeam(res.data.api.teams[0])
        API.roster(res.data.api.teams[0].teamId)
        .then(res=>{
            console.log(res)
            setPlayers(res.data.api.players)
        })

        API.record(res.data.api.teams[0].teamId)
        .then(res=>{
            console.log(res)
            setStandings(res.data.api.standings[0])
        })
})
}, [])





    return (
        <div>
            <h1>Team</h1>
            <ul>
                <li>
                    {team ? (
                        <div>
                            <p>{team.fullName}</p>
                            <img src={team.logo} alt='team logo'/> 
                            <h3>{player[0].firstName} {player[0].lastName}</h3>
                            <h4>{standing.winPercentage} Lakers are trash </h4>
                        </div>
                    ): (
                        <div>
                            No Team 
                        </div>
                    )}
                    
                </li>
            </ul>
        </div>
        )
}        


export default NBA