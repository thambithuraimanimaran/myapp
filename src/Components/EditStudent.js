import React, { useEffect, useState } from "react";
import BaseApp from "../Base/Base";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export function EditStudent({student,setStudent }) {
    const [rollx, setRollx] = useState("");
    const [name, setName] = useState("");
    const [group, setGroup] = useState("");
    const [result, setResult] = useState("");
    const [percentage, setPercentage] = useState("");

    const { id } = useParams();
    const Students = student.find(ele => ele.roll == id)
    const history = useHistory();

    useEffect(()=>{
        setRollx(Students.roll);
        setName(Students.name);
        setGroup(Students.group);
        setResult(Students.result);
        setPercentage(Students.percentage)
    },[])
    
    const EditStudentdata = ()=>{
        const oldStudent = student.findIndex(e=>e.roll == id)
        console.log(oldStudent)
        const updatedStudent = {
            roll:rollx,
            name,
            group,
            result,
            percentage
        }
        student[oldStudent] = updatedStudent;
        setStudent([...student]);
        history.push('/student')
    }


    return(
        <BaseApp>
           <div className="d-flex flex-wrap justify-content-center  vh-100">
                <div className="width2 form">
                    <div><h2 className="text-light">Change the Data Here!</h2></div>
                <input placeholder="roll" className="form-control m-4 rounded-pill "
                    value={rollx}
                    onChange={(event) => setRollx(event.target.value)} />
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
                        onClick={() => { EditStudentdata() }}>AddStudent</button>
                </div>
            </div>
        </div>
        
        </BaseApp>
    )
}