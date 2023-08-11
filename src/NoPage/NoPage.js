import React from "react";
import {useHistory} from "react-router-dom";

export function NoPage(){
    const history = useHistory();
    return(
        <div>
        <h2>Hi you entered wrong page 404</h2>
        <button
        onClick={()=>history.push("/")}>Go Back Your HomePage</button>
        </div>
    )
}