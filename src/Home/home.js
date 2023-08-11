import React from "react";
import BaseApp from "../Base/Base";

export function HomeApp(){
    return(
        <BaseApp>
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center ">
            <div className="container ">
                <div className="row justify-content-start">
                    <div className="col-10 col-lg-8  mb-5">
                        
                        <h1 className="display-2 fw-bold   mb-5">The Best CBSE School For Your Child</h1>
                       
                    </div>

                </div>

            </div>
            
        </div>
        <div className="owl-item cloned">

        </div>
        </BaseApp>
    )
}