import React, { useState } from "react";
import BaseApp from "../Base/Base";
import {useHistory} from "react-router-dom";

export function AddStudent({student,setStudent}){
    const [roll, setRoll] = useState("");
    const [name, setName] = useState("");
    const [group, setGroup] = useState("");
    const [result, setResult] = useState("");
    const [percentage, setPercentage] = useState("");

    const history = useHistory();

    const AddnewStudent = () => {
        const newstudent = {
            roll,
            name,
            group,
            result,
            percentage
        }
        setStudent([...student, newstudent]);
        history.push("/student");
    }
    return(
        <BaseApp>
         <div className="d-flex flex-wrap justify-content-center   vh-100">
                <div className=" form width2">
                    <div>
                        <h2 className="">Add a new Student</h2>
                    </div>
                    <input placeholder="roll" className="form-control m-4 rounded-pill"
                        value={roll}
                        onChange={(event) => setRoll(event.target.value)} />
                    <input placeholder="name" className="form-control m-4 rounded-pill"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <input placeholder="group" className="form-control m-4 rounded-pill"
                        value={group}
                        onChange={(event) => setGroup(event.target.value)} />
                    <input placeholder="result" className="form-control m-4 rounded-pill"
                        value={result}
                        onChange={(event) => setResult(event.target.value)} />
                    <input placeholder="percentage" className="form-control m-4 rounded-pill"
                        value={percentage}
                        onChange={(event) => setPercentage(event.target.value)} />
                    <div>
                        <button className="btn btn-primary m-1 form-control m-4 rounded-pill"
                            onClick={() => { AddnewStudent() }}>AddStudent</button>
                    </div>
                </div>
            </div>
        
        </BaseApp>
    )
}