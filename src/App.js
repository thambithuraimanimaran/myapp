
import { useState } from 'react';
import './App.css';
import BaseApp from './Base/Base';
import { UserStudent } from './Components/UserStudent';
import { StudentData } from './Data/StudentData';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import { EditStudent } from './Components/EditStudent';
import { ViewStudent } from './Components/ViewStudent';
import { AddStudent } from './Components/AddStudent';
import { TeacherData } from './Data/Teacher';
import { UserTeacher } from './Components/Teachers/UserTeacher';
import { AddTeacher } from './Components/Teachers/AddTeachers';
import { EditTeacher } from './Components/Teachers/EditTeacher';
import { ViewTeacher } from './Components/Teachers/ViewTeacher';
import { HomeApp } from './Home/home';
import { NoPage } from './NoPage/NoPage';

function App() {
  const [student,setStudent]=useState(StudentData);
  const [teacher,setTeacher]=useState(TeacherData);

  return (
    <div className="App">
   <Switch>
    <Route exact path="/">
    <HomeApp/>
    </Route>
    <Route path="/student">
      <UserStudent student={student} setStudent={setStudent}/>
    </Route>
    <Route path="/editstudent/:id">
    <EditStudent student={student} setStudent={setStudent}/>
    </Route>
    <Route path="/viewstudent/:id">
    <ViewStudent student={student} setStudent={setStudent}/>
    </Route>
    <Route path="/addstudent">
    <AddStudent student={student} setStudent={setStudent}/>
    </Route>
    <Route path="/teacher">
    <UserTeacher teacher={teacher} setTeacher={setTeacher}/>
    </Route>
    <Route path="/addteacher">
    <AddTeacher teacher={teacher} setTeacher={setTeacher}/>
    </Route>
    <Route path="/editteacher/:id">
    <EditTeacher teacher={teacher} setTeacher={setTeacher}/>
    </Route>
    <Route path="/viewteacher/:id">
      <ViewTeacher teacher={teacher}/>
    </Route>
    <Route path="**">
    <NoPage/>
    </Route>



   </Switch>
    </div>
  );
}

export default App;
