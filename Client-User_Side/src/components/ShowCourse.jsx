import React from 'react';
import Navbar from '../components/Navbar';
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import Course from '../components/Course';
import { courseState } from '../store/atoms/course';
function ShowCourse() {
  const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses/", {
            method: "GET",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("userToken")
            }
        }).then(callback1)
    }, []);
  return (
    <div>
      <h1 style={{
        margin:15,
        color: 'rgb(18 55 63)',
        fontWeight:800,
        fontSize:'1.875rem',
        textAlign:'center'
      }}>Popular Courses</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",marginTop:60}}>
          {typeof courses !== 'undefined' && courses.map(course => {
              return <Course course={course} />}
          )}
          {
            typeof courses === 'undefined' && <Typography>
                no live course are available
            </Typography>
          }
      </div>
    </div>
  );
}


export default ShowCourse;
