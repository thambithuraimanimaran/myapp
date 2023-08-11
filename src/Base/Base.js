import React from "react";

export default function BaseApp({children}){
    return(
        <div>
     
        <nav className="navbar navbar-expand-lg  sticky-top">
            <div className="container-fluid ">
                <a className="navbar-brand fw-bold " href="/"><h3 className="fw-bold display-6 text-secondary"><i class="fa-solid fa-book-open-reader"></i> Courses</h3></a>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link fw-bold" href="/teacher">Teacher</a></li>
                    <li className="nav-item"><a className="nav-link  fw-bold" href="/student">Student</a></li>
                    <li className="nav-item"><a className="nav-link fw-bold" href="/addstudent">Add Student</a></li>
                    <li className="nav-item"> <a className="nav-link fw-bold" href="/addteacher">Add Teacher</a></li>
                    <li className="nav-item"><a className="nav-link fw-bold" href="/">Home</a></li>
                </ul>
            </div>
        </nav>
             
        
        <div className="vh-100">{children}</div>
  
        
        
            <footer className="py-3 my-4 footer position-fixed">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a className="nav-link text-muted px-2" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link text-muted px-2" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link text-muted px-2" href="#">Pricing</a></li>
                <li className="nav-item"><a className="nav-link text-muted px-2" href="#">FAQs</a></li>
                <li className="nav-item"><a className="nav-link text-muted px-2" href="#">About</a></li>
            </ul>      
            </footer>
                          
     </div>
    )
}