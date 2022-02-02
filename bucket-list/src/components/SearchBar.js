import React from 'react'
import {
    InputGroup,
    FormControl,
   } from "react-bootstrap" 

function SearchBar () {
return(

<InputGroup className="SearchBar" size="lg">
 <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
 <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
</InputGroup>
   

)
}


export default SearchBar; 


 