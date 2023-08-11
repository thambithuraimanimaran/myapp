import React, { useEffect, useState } from "react";
import BaseApp from "../../Base/Base";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

export function EditTeacher({teacher,setTeacher}){
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [salary, setSalary] = useState("");
    const history = useHistory();

    const { id } = useParams();
    const Newmentor = teacher.find(ele => ele.id == id);

    useEffect(() => {
        setIdx(Newmentor.id);
        setName(Newmentor.name);
        setSubject(Newmentor.subject);
        setExperience(Newmentor.experience);
        setSalary(Newmentor.salary);
    }, [])

    const EditNewTeacher = () => {
        const OldTeacher = teacher.findIndex(a => a.id == id);
        console.log(OldTeacher)
        const UpdateEditTeacher = {
            id: idx,
            name,
            subject,
            experience,
            salary
        }
        teacher[OldTeacher] = UpdateEditTeacher
        setTeacher([...teacher])
        history.push("/teacher")
    }
    return(
        <BaseApp>
         <div className="d-flex flex-wrap justify-content-center vh-100">
                <div className="width2 form">
                    <input placeholder="id" className="form-control m-4 rounded-pill"
                        value={idx}
                        onChange={(event) => setIdx(event.target.value)} />
                    <input placeholder="name" className="form-control m-4 rounded-pill"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <input placeholder="subject"  className="form-control m-4 rounded-pill"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)} />
                    <input placeholder="experience"  className="form-control m-4 rounded-pill"
                        value={experience}
                        onChange={(event) => setExperience(event.target.value)} />
                    <input placeholder="salary"  className="form-control m-4 rounded-pill"
                        value={salary}
                        onChange={(event) => setSalary(event.target.value)} />
                    <div>
                        <button className="btn btn-primary form-control m-4 rounded-pill" 
                            onClick={() => { EditNewTeacher() }}>EditTeacher</button>
                    </div>
                </div>
            </div>
        </BaseApp>
    )
}