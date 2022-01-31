import React, { useState, useEffect } from 'react';
import API from "../utils/nbaAPI"

function NBA() {

useEffect( () => {
API.search("Lakers")
.then(res=>{
    console.log(res)
})
}, [])






    return (
        <div>NBA</div>
        )
} 

export default NBA