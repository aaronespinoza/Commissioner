import React from 'react'
import {
    InputGroup,
    FormSelect,
   } from "react-bootstrap" 

function TeamSelect (props) {
return(


<InputGroup size="lg">
 <InputGroup.Text id="inputGroup-sizing-lg">Change Team</InputGroup.Text>
 <FormSelect  aria-label="Default select example">
  <option>Open this select menu to view teams</option>
  <option value="1">Hawks</option>
  <option value="2">Celtics</option>
  <option value="3">Nets</option>
  <option value="1">Hornets</option>
  <option value="2">Bulls</option>
  <option value="3">Caveliers</option>
  <option value="1">Mavericks</option>
  <option value="2">Nuggets</option>
  <option value="3">Pistons</option>
  <option value="1">Warriors</option>
  <option value="2">Rockets</option>
  <option value="3">Pacers</option>
  <option value="1">Clippers</option>
  <option value="2">Lakers</option>
  <option value="3">Grizzlies</option>
  <option value="1">Heat</option>
  <option value="2">Bucks</option>
  <option value="3">Timberwolves</option>
  <option value="1">Pelicans</option>
  <option value="2">Knicks</option>
  <option value="3">Thunder</option>
  <option value="1">Magic</option>
  <option value="2">76ers</option>
  <option value="3">Suns</option>
  <option value="1">Trail Blazers</option>
  <option value="2">Kings</option>
  <option value="3">Spurs</option>
  <option value="1">Raptors</option>
  <option value="2">Jazz</option>
  <option value="3">Wizards</option>
</FormSelect>



 {/* onClick=( () => props.submit(form value will go here))  */}


</InputGroup>
   



)
}


export default TeamSelect; 