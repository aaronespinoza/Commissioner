import React, { useState, useEffect } from 'react';
import API from "../utils/nbaAPI"

function NBA() {

    const [team, setTeam] = useState();

useEffect( () => {
API.search("Lakers")
.then(res=>{
    console.log(res)
    setTeam(res.data.api.teams[0])
})
}, [])





    return (
        <div>
            <h1>Team</h1>
            <ul>
                <li>
                    {`${team.fullName}`}
                    <img src={team.logo} alt='team logo'/>
                </li>
            </ul>
        </div>
        )
} 

export default NBA