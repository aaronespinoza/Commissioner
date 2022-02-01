import React from 'react'
import {
    InputGroup,
    FormControl,
   } from "react-bootstrap" 

function SearchBar () {
return(

<InputGroup size="lg">
 <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
 <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
   

)
}


export default SearchBar; 


 