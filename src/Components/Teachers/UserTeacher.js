import React, { useState } from "react";
import BaseApp from "../../Base/Base";
import { TeacherData } from "../../Data/Teacher";
import {useHistory} from "react-router-dom";

export function UserTeacher({teacher,setTeacher}){
    const history = useHistory();

    const DeleteTeacher = (e)=>{
        const UpdateDeleteTeacher = teacher.filter((ment)=>ment.id!==e);
        setTeacher(UpdateDeleteTeacher);
    }
    
   
    return(
        <BaseApp>
         <div>
            <div>
                <h2 className="text-dark">Teacher's Details</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
            {teacher.map((mentor,idx)=>(
                <div key={idx} className="card width m-4">
                    <div className="card-header">
                        <h2>{mentor.name}</h2>
                    </div>
                    <div className="card-body">
                        <p>Subject : {mentor.subject}</p>
                        <p>Exp : {mentor.experience} Years</p>
                        <p>Salary : {mentor.salary}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary m-1"
                        onClick={()=>history.push(`/editteacher/${mentor.id}`)}>Edit</button>
                        <button className="btn btn-warning m-1"
                        onClick={()=>history.push(`/viewteacher/${idx}`)}>View</button>
                        <button className="btn btn-danger m-1"
                        onClick={()=>DeleteTeacher(mentor.id)}>Delete</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
        
        </BaseApp>
    )
}