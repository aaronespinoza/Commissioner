import React from "react";
import "./SearchPage.css";
<<<<<<< HEAD:bucket-list/src/Pages/SearchPage/SearchPage.js
import img from "../../images/searchCourt.jpg";
import MyTeamCard from "../../components/MyTeamCard";
import WinsCard from "../../components/WinsCard";
import Percentage from "../../components/Percentage";
import Roster from "../../components/Roster";
import SearchBar from "../../components/SearchBar";
=======
import img from "../images/searchCourt.jpg";
import MyTeamCard from "../components/MyTeamCard";
import WinsCard from "../components/WinsCard";
import Percentage from "../components/Percentage";
import Roster from "../components/Roster";
>>>>>>> b0fb61efd58be11fbf1fd8d0403ef158d8697a9c:client/src/pages/SearchPage.js
import {
    Row,
    Col,
   } from "react-bootstrap" 


function SearchPage() {
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
            <MyTeamCard />
            <WinsCard />
            <Percentage />
          </Col>
          <Col sm={4}>
              <SearchBar/>
            <Roster/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SearchPage;
