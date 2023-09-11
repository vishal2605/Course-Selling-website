import React from 'react';
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function Course({course}){
  const navigate=useNavigate();
  return(
    <div>
        <Card style={{
          margin:20,
          height:'80%',
          width:400,
          borderColor: 'rgb(18 55 63 )', // Replace 'red' with the color you want
          borderStyle: 'solid', // You can also specify other border styles like 'dashed' or 'dotted'
          borderWidth: 0.5,
          borderRadius:10
        }} onClick={() => {
                    navigate("/courses/" + course._id);
                }}>
          <header style={{
            backgroundImage: `url(${course.imageLink})`,
            height:150,
            backgroundPosition:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontWeight:'bold',
            fontSize:'1.4rem',
            color:'white'
          }}>
            {course.title}
          </header>
          <div style={{
            display:'flex',
            flexDirection:'column',
            // alignItems:'center'
          }}>
            
              <div style={{
                color:'rgb(241 154 51)',
                marginTop:20,
                fontWeight:'bold',
                margin:'10px',
              }}>
                ₹{course.price}
              </div>
              <p style={{
                color: 'rgb(18 55 63)',
                fontSize:'1rem',
                padding:10,
                lineHeight:'1.5rem'
              }}>
              {course.description}
              </p>
          </div>
        </Card>
        <div style={{margin:40}}>.</div>
    </div>
  )
}
export default Course;
