import { useEffect, useState } from 'react'
import Login from './components/Login';
import Landing from "./components/Landing";
import Register from './components/Register';
import ShowCourses from './components/ShowCourse';
import CourseAtId from './components/CourseAtId';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import {RecoilRoot,useSetRecoilState} from 'recoil';
import { userState } from './store/atoms/user';
import axios from 'axios';
import { BASE_URL } from "../config.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
    <Router>
            <Navbar></Navbar>
            <InitUser></InitUser>
            <Routes>
                <Route path="/" element={<Landing  />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/courses/:courseId" element={<CourseAtId />} />
                <Route path='/dashboard' element={<Dashboard/>}></Route>
              
            </Routes>
    </Router>
    </RecoilRoot>
  )
}

function InitUser(){
  const setUser=useSetRecoilState(userState);
  const init=async()=>{
    try{
      const res=await axios.get(`${BASE_URL}/users/me`,{
        headers: {
          "authorization": "Bearer " + localStorage.getItem("userToken")
      }
      })
      console.log(res.data);
      if(res.data.username){
        setUser({
          isLoading:false,
          userEmail:res.data.username
        })
      }
      else{
        setUser({
          isLoading:false,
          userEmail:null
        })
      }
    }
    catch(e){
      setUser({
        isLoading:false,
        userEmail:null
      })
    }
  }

  useEffect(()=>{
    init();
  },[]);
  return <> </>
}
export default App
