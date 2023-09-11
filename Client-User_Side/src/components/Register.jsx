import axios, { formToJSON } from "axios";
import React, { useEffect } from "react";
import {useState } from "react";
import { Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { Button, TextField, Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import {userLoadingState} from '../store/selectors/isUserLoading';
import {userEmailState} from '../store/selectors/userEmail';

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const navigate = useNavigate();
  const userEmail=useRecoilValue(userEmailState);
  const setUser=useSetRecoilState(userState);
  // const history=useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    console.log(name,value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=()=>{
    // if(!email && !password)return;
    console.log("post here")
    console.log(formData.password)
    axios.post('http://localhost:3000/users/signup',{
      username : formData.email,
      password : formData.password
    })
      .then(response => {
        localStorage.setItem('userToken',response.data.token);
        console.log(localStorage.getItem('userToken'));
        window.history.replaceState(null, null, '/courses');
        setUser({
          userEmail:formData.email,
          isLoading:false
        })
        navigate('/login');
        // history.push('/about');
      })
      .catch(error => {
        console.error('User registration error:', error);
      });
  }

  return (
    <div className="register-page">
  <div className="container" >
    <center>
      <Typography variant="h4" component={"h2"} style={{ marginBottom: '30px' }}>Register</Typography>
    </center>
    <form>
      <TextField label="Email" variant="outlined" style={{width:300}}name="email" onChange={handleChange}></TextField>
      <br/>
      <TextField label="Password" type="Password" name="password" variant="outlined"  onChange={handleChange} style={{marginTop:'10px',width:300}}></TextField>
      <br></br>
      <Button variant="contained" style={{marginTop:'10px', width:300 , backgroundColor:"black"}} onClick={handleSubmit}>Register</Button>
      <br></br>
      <p >Already have an account? <a style={{color:"gold"}} href="/login">Login here</a></p>
    </form>
  </div>
  </div>
  )

}

export default Register;