import React from "react";
import './alpha.css';

function Alpha(){
    return (
        <div className="container">
            <div className="container-text">
               <p className="para-1">Start Learning For Free</p> 
               <h1 className="head-1">Studies Can Now Be Done Online Much Easily</h1>
               <p className="para-2">You can access 7000+ different courses from 600 professional trainers for free</p>
               <div className="btn-container">
                  <button className="btn-pri">Join For Free</button>
                  <button className="btn-pri">Find Courses</button>
               </div>
               <div className="text-icon">
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/4889/4889051.png" width="40px"/>
                    <p className="icon-text">Over 12 million Students</p>
                </div>
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/4889/4889051.png" width="40px"/>
                    <p className="icon-text">More than 83,000 courses</p>
                </div>
                <div className="icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/4889/4889051.png" width="40px"/>
                    <p className="icon-text">learn anything online</p>
                </div>
               </div>
            </div>
            <div className="container-img">
               <div className="img">
                  <img className="img-1" src="https://cdni.iconscout.com/illustration/premium/preview/woman-working-on-computer-6276166-5191804.png?w=0&h=1400"/>
               </div>
            </div>
        </div>
    )
}

export default Alpha;