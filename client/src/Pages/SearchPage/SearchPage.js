import React from 'react'
import './SearchPage.css';
import img from "../../images/searchCourt.jpg"
import MyTeamCard from '../../components/MyTeamCard'

function SearchPage () {
    return (
        <>
           <div style={{ backgroundImage: `url(${img})`, backgroundSize:"cover", height:"100vh"}}>
           <MyTeamCard/>
               </div>
            
        </>
    )
}







export default SearchPage; 