import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function BaseApp({ children }) {
    const history = useHistory();
    return (
        <div>

            <nav className="navbar navbar-expand-lg  sticky-top">
                <div className="container-fluid ">
                    <a className="navbar-brand fw-bold " href="/"><h3 className="fw-bold display-6 text-secondary"><i class="fa-solid fa-book-open-reader"></i> Courses</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-formTarget="#menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item"><a className="nav-link fw-bold" href="#" onClick={() => history.push("/teacher")}>Teacher</a></li>
                            <li className="nav-item"><a className="nav-link  fw-bold" href="#" onClick={() => history.push("/student")}>Student</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="#" onClick={() => history.push("/addstudent")}>Add Student</a></li>
                            <li className="nav-item"> <a className="nav-link fw-bold" href="#" onClick={() => history.push("/addteacher")}>Add Teacher</a></li>
                            <li className="nav-item"><a className="nav-link fw-bold" href="#" onClick={() => history.push("/")}>Home</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="vh-100">{children}</div>



            <footer className="py-3 my-4 footer position-fixed">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a className="nav-link text-dark fw-bold px-2" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold px-2" href="#">Features</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold px-2" href="#">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold px-2" href="#">FAQs</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold px-2" href="#">About</a></li>
                </ul>
            </footer>

        </div>
    )
}