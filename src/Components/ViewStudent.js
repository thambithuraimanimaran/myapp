import React from "react";
import BaseApp from "../Base/Base";
import {useParams} from "react-router-dom";

export function ViewStudent({student}){
    const {id} = useParams();
    const person = student[id]
    return(
        <BaseApp>
         <div className="d-flex flex-wrap justify-content-center">   
                <div className="card width m-4">
                    <div className="card-header">
                        <h2>{person.name}</h2>
                    </div>
                    <div className="card-body">
                    <p>Group : {person.group}</p>
                            <p>Result : {person.result}</p>
                            <p>Percentage : {person.percentage}%</p>
                    </div>
                </div>
            </div>
        
        </BaseApp>
    )
}