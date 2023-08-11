import React, { useState } from "react";
import BaseApp from "../Base/Base";
import { StudentData } from "../Data/StudentData";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function UserStudent({student,setStudent}){
    const history = useHistory();
    
    const NewDeleteData = (ele)=>{
        const Updatedelete = student.filter((stu)=>stu.roll!==ele);
        setStudent(Updatedelete);
    }
    return(
        <BaseApp>
    <div>
        <div>
                <h2 className="text-dark">Students Details</h2>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
            {student.map((stud,idx)=>(
            <div key={idx} className="card width m-4">
                <div className="card-header">
                        <h2>{stud.name}</h2>
                </div>
                <div className="card-body">
                    <p>Group : {stud.group}</p>
                    <p>Result : {stud.result}</p>
                    <p>Percentage : {stud.percentage}%</p>
                </div>
                <div className="card-footer">
                        <button className="btn btn-primary m-1"
                        onClick={()=>history.push(`/editstudent/${stud.roll}`)}>Edit</button>
                        <button className="btn btn-warning m-1"
                        onClick={()=>history.push(`/viewstudent/${idx}`)}>View</button>
                        <button className="btn btn-danger m-1"
                       onClick={()=>{NewDeleteData(stud.roll)}}>Delete</button>
                    </div>
            </div>
            ))}
      </div>
    </div>
        
        </BaseApp>
    )
}