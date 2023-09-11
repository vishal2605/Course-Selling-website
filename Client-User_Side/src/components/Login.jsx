import React from "react";
import "../App.css";
import axios from 'axios';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import {useLocation} from 'react-router'
import { userState } from "../store/atoms/user";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {userLoadingState} from '../store/selectors/isUserLoading';
import {userEmailState} from '../store/selectors/userEmail';

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const userLoading=useRecoilValue(userLoadingState);
  const userEmail=useRecoilValue(userEmailState);
  const setUser=useSetRecoilState(userState);


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value)
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    const handleSubmit=()=>{

      axios.post('http://localhost:3000/users/login',{
      username : formData.email,
      password : formData.password
    })
      .then(response => {
        localStorage.setItem('userToken',response.data.token);
        console.log(localStorage.getItem('userToken'));
        setUser({
          userEmail:formData.email,
          isLoading:false
        })
        // if (location.state?.from) {
        //   navigate(location.state.from);
        // }
        // navigate('/about');
        // windows.location.reload();
        
      })
      .catch(error => {
        console.error('User registration error:', error);
      });
  }
    return (
    <div className="login">
      {!userEmail && <div className="container" >
        <center>
          <Typography variant="h4" component={"h2"} style={{ marginBottom: '30px' }}>Login</Typography>
        </center>
        <form>
          <TextField label="Email" variant="outlined" style={{width:300}}name="email" onChange={handleChange}></TextField>
          <br/>
          <TextField label="Password" type="Password" name="password" variant="outlined"  onChange={handleChange} style={{marginTop:'10px',width:300}}></TextField>
          <br></br>
          <Button variant="contained" style={{marginTop:'10px', width:300 , backgroundColor:"black"}} onClick={handleSubmit}>Login</Button>
          <br></br>
          <p >Not Registerd yet? <a style={{color:"gold"}} href="/register">Register here</a></p>
        </form>
      </div>}
      {userEmail && <div style={{display:"flex",alignItems:"center",justifyContent:'center',marginTop:200}}>
          <center>
            <Typography style={{fontSize:'1.5rem',lineHeight:'2rem'}}>You are Logged In</Typography>
            <Link to={'/dashboard'}>
                <h3 style={{
                  color:'rgb(241 154 51)',
                  fontSize:'1.2rem',
                  textDecoration:'none',
                }}>Go to dashboard</h3>
            </Link>
          </center>
        </div>}
      </div>
    )
}

export default Login;