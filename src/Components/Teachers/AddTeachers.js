import React, { useState } from "react";
import BaseApp from "../../Base/Base";
import {useHistory} from "react-router-dom";

export function AddTeacher({teacher,setTeacher}){
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[subject,setSubject]=useState("");
    const[experience,setExperience]=useState("");
    const[salary,setSalary]=useState("");

    const history = useHistory();

    const AddnewTeacher = ()=>{
        const updateTeacher = {
            id,
            name,
            subject,
            experience,
            salary
        }
        setTeacher([...teacher,updateTeacher]);
        history.push("/teacher")
    }
    return(
        <BaseApp>
         <div className="d-flex flex-wrap justify-content-center vh-100">
            <div className="width2 form">
                <div><h2 className="text-dark">Add a New Teacher</h2></div>
            <input placeholder="id" className="form-control m-4 rounded-pill"
            value={id}
            onChange={(event)=>setId(event.target.value)}/>
            <input placeholder="name" className="form-control m-4 rounded-pill"
            value={name}
            onChange={(event)=>setName(event.target.value)}/>
            <input placeholder="subject" className="form-control m-4 rounded-pill"
            value={subject}
            onChange={(event)=>setSubject(event.target.value)}/>
            <input placeholder="experience" className="form-control m-4 rounded-pill"
            value={experience}
            onChange={(event)=>setExperience(event.target.value)}/>
            <input placeholder="salary" className="form-control m-4 rounded-pill"
            value={salary}
            onChange={(event)=>setSalary(event.target.value)}/>
            <div>
                <button className="btn btn-primary form-control m-4 rounded-pill"
                onClick={()=>AddnewTeacher()}>AddTeacher</button>
            </div>
        </div>
        </div>
        </BaseApp>
    )
}