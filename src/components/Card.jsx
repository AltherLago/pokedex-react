import React from "react";
import Img from "../images/charmander.png"

export default function Card(){
    return(
        <>
            <div className="card">
                <h2>1</h2>
                <img src={Img} alt="charmandr" />
                <h2>Charmander</h2>
            </div>
        </>
    )
}
