import React from "react";
import StarRating from "../Rating.js";
import Detail from "../Detail.js";
import Author from "../Author.js";
import './Charlie.css';
function Charlie(){
  return (
    <div className="container-course">
        <div className="cat-text">
        <h1 className="head-2">Our Most Popular Courses</h1>
        <p className="para-3">12,000+ unique online course list designs</p>
        </div>
        <div className="container-btn">
            <button className="btn-sec">Recent Courses</button>
            <button className="btn-sec">Featured Courses</button>
            <button className="btn-sec">Popular Courses</button>
        </div>
        <div className="course-grid">
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>      
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
         <div class="course-card">
            <img src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=1060&t=st=1672996092~exp=1672996692~hmac=466130dad955e5ec4380df436082983ec7f5d0ad4c81a81532e5f5e6f13ca7cb" className="course-img"/>
            <div className="rate"><StarRating /></div>
            <p className="para-5">Learn Figma - UI/UX Digital Essential Training</p>
            <div className="course-det"><Detail/></div>
            <Author/>
         </div>
        </div>
        <button className="btn-course">View All Courses</button>
    </div>    
  )
}
export default Charlie;