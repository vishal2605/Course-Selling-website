import { Button, Typography } from '@mui/material';
import Course from './Course';
import React from 'react';
import { useEffect, useState } from "react";
import { BASE_URL } from "../config.js";
import { Link } from 'react-router-dom';

// Functional Component
function Dashboard() {

    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setCourses(data.purchasedCourses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch(`${BASE_URL}/users/purchasedCourses`, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("userToken")
            }
        }).then(callback1)
    }, []);

  return (
    <div>
    <div style={{display:'flex', justifyContent:'space-between', marginTop:40}}>
      <Typography style={{marginLeft:20,fontSize:'1.25rem',fontWeight:300}}>All Courses bought by You</Typography>
      <Link to={'/courses'}>
        <Button style={{background:'rgb(18 55 63)',color:'white', borderRadius:5, margin:12}}>Explore More Course</Button>
      </Link>
    </div>
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",marginTop:60}}>
            {typeof courses !== 'undefined' && courses.map(course => {
              return <Course course={course} />}
          )}
          {
            courses.length===0 && <Typography>
                you haven't bought any course
            </Typography>
          }
      </div>

    </div>
  );
}

export default Dashboard;
