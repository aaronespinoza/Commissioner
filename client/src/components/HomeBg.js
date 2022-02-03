import React from "react";
import mainImg from "../images/signIn.jpg";

function HomeBg (){
    return (
        <div className="pt-5 justify-content-center align-items-center d-flex w-100"
            style={{
                backgroundImage: `url(${mainImg})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
        </div>
    )
}

export default HomeBg; 