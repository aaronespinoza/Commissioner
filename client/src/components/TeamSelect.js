import React from 'react'
import {
    InputGroup,
    FormSelect,
   } from "react-bootstrap" 

function TeamSelect (props) {

    function handleChange (event) {
        props.setState({
            ...props.state,
            favoriteTeam:event.target.value
        })
    }
return(


<InputGroup size="lg">
 <InputGroup.Text id="inputGroup-sizing-lg">Change Team</InputGroup.Text>
 <FormSelect  aria-label="Default select example" onChange={handleChange}>
  <option>Open this select menu to view teams</option>
  <option value="Hawks">Hawks</option>
  <option value="Celtics">Celtics</option>
  <option value="Nets">Nets</option>
  <option value="Hornets">Hornets</option>
  <option value="Bulls">Bulls</option>
  <option value="Caveliers">Caveliers</option>
  <option value="Mavericks">Mavericks</option>
  <option value="Nuggets">Nuggets</option>
  <option value="Pistons">Pistons</option>
  <option value="Warriors">Warriors</option>
  <option value="Rockets">Rockets</option>
  <option value="Pacers">Pacers</option>
  <option value="Clippers">Clippers</option>
  <option value="Lakers">Lakers</option>
  <option value="Grizzlies">Grizzlies</option>
  <option value="Heat">Heat</option>
  <option value="Bucks">Bucks</option>
  <option value="Timberwolves">Timberwolves</option>
  <option value="Pelicans">Pelicans</option>
  <option value="Knicks">Knicks</option>
  <option value="Thunder">Thunder</option>
  <option value="Magic">Magic</option>
  <option value="76ers">76ers</option>
  <option value="Suns">Suns</option>
  <option value="Trail Blazers">Trail Blazers</option>
  <option value="Kings">Kings</option>
  <option value="Spurs">Spurs</option>
  <option value="Raptors">Raptors</option>
  <option value="Jazz">Jazz</option>
  <option value="Wizards">Wizards</option>
</FormSelect>



 {/* onClick=( () => props.submit(form value will go here))  */}


</InputGroup>
   



)
}


export default TeamSelect; 