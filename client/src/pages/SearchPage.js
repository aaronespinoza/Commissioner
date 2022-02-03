import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import img from "../images/searchCourt.jpg";
import MyTeamCard from "../components/MyTeamCard";
import WinsCard from "../components/WinsCard";
import Percentage from "../components/Percentage";
import Roster from "../components/Roster";
import API from "../utils/nbaAPI"
import Auth from '../utils/auth'
import {
    Row,
    Col,
   } from "react-bootstrap" 
   
import SearchBar from "../components/SearchBar";


function SearchPage() {


  const [formInput, setFormInput] = useState("");
  const [team, setTeam] = useState(null);
  const [standings, setStandings] = useState();

  useEffect(  () => {
      const fetchData = async () => {
        console.log(Auth.getProfile()) 
        const results = await API.search(Auth.getProfile().data.favoriteTeam)
          console.log(results)
          setTeam(results.data.api.teams[0])
        
  
          
     
      }
      fetchData()    
  }, [])

useEffect( () => {
  const fetchData = async () => {
    const recordResults = await API.record(team.teamId)
    console.log(recordResults)
            setStandings(recordResults.data.api.standings[0])
  }
  fetchData()
}, [team])

useEffect ( () => {
  console.log(standings)
}, [standings])
console.log(team?.fullName)

if (!team || !standings) return <div>Loading</div>

  return (
    <>
      <div className="pt-5 justify-content-center align-items-center d-flex w-100"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          height: "100vh",
        }}

        
      >
        <Row className="componentContainer w-75">
          <Col sm={8} className="winsPercentageContainer justify-content-between">
            {team.fullName && <MyTeamCard teamName={team?.fullName}/>}
            <WinsCard wins={standings.win} losses={standings.loss}/>
            <Percentage winPercentage={standings.winPercentage} winStreak={standings.winStreak}/>
          </Col>
          <Col sm={4}>
            <SearchBar submit={setFormInput}/>
            <Roster teamLogo={team?.logo}/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SearchPage;
