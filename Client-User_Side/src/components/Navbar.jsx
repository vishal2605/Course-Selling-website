import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
// import img from '../images/course-selling-website.png';
import { Button, TextField, Grid } from '@mui/material';
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import {userLoadingState} from '../store/selectors/isUserLoading';
import {userEmailState} from '../store/selectors/userEmail';
import { BASE_URL } from "../config.js";
function Navbar(){
    const navigate = useNavigate();
    const userLoading=useRecoilValue(userLoadingState);
    const userEmail=useRecoilValue(userEmailState);
    const setUser=useSetRecoilState(userState);
    // if(userLoading){
    //     return <></>
    // }
    return (
    <header className="header">
    <div>
    <span className="app-name">Learn</span>
    <span className="app-name-second-half">Kart</span>
    </div>
    
    <div style={{minWidth:300}}>
        <div className="nav">
        <Link to={'/'}>
            <p className="login-button">Home</p>
        </Link>
        < Link to={'/courses'}>
            <p className="login-button">Courses</p>
        </Link>
         <Link to={'/login'}>
            {!userEmail && <p className="login-button">Login</p>}
            {userEmail && <p className="login-button">User</p>}
        </Link>
        {!userEmail &&<Link to={'/register'}>
            <button className="filled-button" onClick={"/register"}>Signup</button>
        </Link>}
        { userEmail&& <Link to={'/login'}>
            <button className="filled-button" onClick={()=>{
                localStorage.setItem("userToken", null);
                setUser({
                    userEmail:null,
                    isLoading:false
                })
            }}>Logout</button>
        </Link>}
        </div>
        
    </div>
  </header>
    )
}
export default Navbar;