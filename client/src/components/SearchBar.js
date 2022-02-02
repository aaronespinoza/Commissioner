import React from 'react'
import {
    InputGroup,
    FormControl,
   } from "react-bootstrap" 

function SearchBar (props) {
return(


<InputGroup size="lg">
 <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
 <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />



 {/* onClick=( () => props.submit(form value will go here))  */}


</InputGroup>
   



)
}


export default SearchBar; 



 

