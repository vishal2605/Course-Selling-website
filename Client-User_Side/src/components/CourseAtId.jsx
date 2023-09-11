import React from 'react';
import { useParams } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {userEmailState} from '../store/selectors/userEmail';
import { courseState } from '../store/atoms/course';
import {courseTitle} from '../store/selectors/courseTitle';
import {courseDescription} from '../store/selectors/courseDescription';
import {courseImageLink} from '../store/selectors/courseImageLink';
import {coursePrice} from '../store/selectors/coursePrice';
import {purchaseState} from '../store/atoms/purchase';
import axios from 'axios';
// Functional Component
function CourseAtId() {
  let {courseId}=useParams();
  const setCourse = useSetRecoilState(courseState);
  // const [course, setCourse] = useState(null);
  const userEmail=useRecoilValue(userEmailState);
  const title=useRecoilValue(courseTitle);
  const description=useRecoilValue(courseDescription);
  const image=useRecoilValue(courseImageLink);
  const price=useRecoilValue(coursePrice);
  const purchased=useRecoilValue(purchaseState);
  const setPurchase=useSetRecoilState(purchaseState);

  
  useEffect(() => {
      function callback2(data) {
          // console.log(data.title);
          setCourse({
            title:data.title,
            description:data.description,
            imageLink:data.imageLink,
            price:data.price
          })
      }
      function callback1(res) {
          res.json().then(callback2)
      }
      fetch("http://localhost:3000/admin/courses/" + courseId, {
          method: "GET",
          headers: {
              "authorization": "Bearer " + localStorage.getItem("userToken")
          }
      }).then(callback1);

      
  }, []);
  return (
    <div>
      <div style={{
            backgroundImage: `url(${image})`,
            height:300,
            width:'100%',
            backgroundPosition:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontWeight:'bolder',
            fontSize:'1.4rem',
            color:'white',
            flexDirection:'column'
          }}>
            <div style={{display:'flex', flexDirection:'column',fontSize:30,fontWeight:'bolder'}}>
              {title}
            </div>
            <div style={{marginTop:15,color:'rgb(241 154 51)',fontSize:26, fontWeight:'bolder'}}>
              ₹{price}
            </div>
            {!userEmail && <Typography style={{color:'rgb(241 154 51)',fontWeight:'bolder',fontSize:'20px'}}>You are not authenticated to buy any course</Typography>}
            {userEmail && !purchased && <Typography style={{color:'rgb(241 154 51)',fontWeight:'bolder',fontSize:'20px'}}>Course is Already Purchased</Typography>}
            {userEmail && purchased && <Button style={{marginTop:20,borderStyle:'solid',borderWidth:'1px', borderColor:'white', color:'white'}}
              onClick={()=>{
                setPurchase(true);
                function callback1(){
                  alert("course is add sucessfullly")
                }
                fetch('http://localhost:3000/users/courses/'+courseId,{
                  method:'POST',
                  headers: {
                    "authorization": "Bearer " + localStorage.getItem("userToken")
                  }
                }).then(callback1);
              }}
            >
              Buy Course
            </Button>}

            
          </div>
          <div style={{
            fontSize:20,
            color:'rgb(18 55 63 )',
            paddingLeft:'1.5rem',
            paddingRight:'1.5rem',
            maxWidth:'48rem',
            marginTop:'3rem',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:30}}>
            {description}
          </div>
    </div>
  )
}

export default CourseAtId;
