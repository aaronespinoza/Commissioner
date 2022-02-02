import React from 'react';
import homeImg from "../images/signIn.jpg";

function HomeBg(){
    return(
<div
    style={{
        backgroundImage: `url(${homeImg})`,
        backgroundSize: "cover",
        height: "100vh",
    }} >
</div>
    )
}

export default HomeBg;