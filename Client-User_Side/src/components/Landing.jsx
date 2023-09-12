import Navbar from '../components/Navbar';
import { Typography, colors,} from "@mui/material";
import { Card, Grid } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import img from '../images/course-selling-website.png';
import { BASE_URL } from "../config.js";
function Landing(){


    return(
        <div>
        
        <main className="main-content">
            <div className="inline-container">
            <div className="text">
                    <h1 className="heading">Learn Without Limit</h1>
                    <p className="front_para">Embark on a transformative journey of learning with our carefully curated courses. From industry-relevant skills to personal development, our platform offers a diverse range of courses that empower you to thrive in today's dynamic world. Explore, enhance, and excel with expert-led content designed to elevate your knowledge and career prospects.</p>
                    <Link to={'/courses'}>
                    <button className="explore" style={{fontSize:15,marginTop:30}}>Explore Courses</button>
                    </Link>
            </div>
            <div className="inline-image">
                <img src={img} alt="My Image" style={{width:'110%'}} />
            </div>
            </div>
        </main>
        <div >
            <h1  style={{textAlign: 'center',display: 'flex',justifyContent: 'center',
            align: 'center',margin:50,marginTop:100, color:'rgb(18 55 63)'}}>Achive Your Goals With LearnKart</h1>

            <p style={{textAlign: 'center',display: 'flex',justifyContent: 'center',
            align: 'center',fontSize:25, color:'rgb(18 55 63)'}}>Unlock your full potential through LearnKart's diverse courses and expert<br /> guidance. Success awaits you!</p>

            <Grid className='flex-container'>
                <div>
                    <svg style={{background:"rgb(221 243 246)",fontSize:100,width:30,height:30, padding:6 ,tabSize:100}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                    </svg>
                    <h4 style={{fontSize:30}}>Learn the latest skills</h4>
                    <p style={{fontSize:20, lineHeight:1.5}}>Stay ahead with LearnKart: Learn and master the latest in-demand skills for a successful future.</p>
                </div>
                <div>
                    <svg style={{background:"rgb(254 246 234)",width:30,height:30,fontSize:'36px', padding:6 ,tabSize:100}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                <h4 style={{fontSize:30}}>Get ready for a career</h4>
                    <p style={{fontSize:20, lineHeight:1.5}}>LearnKart: Empowering your path to a rewarding career through expert guidance and courses.</p>
                </div>
                <div>
                <svg style={{background:"rgb(221 243 246)",width:30,height:30, padding:6 ,tabSize:100}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                </svg>
                <h4 style={{fontSize:30}}>Earn a certificate</h4>
                    <p style={{fontSize:20, lineHeight:1.5}}>LearnKart: Gain recognition with certified courses for better career opportunities.</p>
                </div>
            </Grid>
        </div>


    <footer className="footer">
        <p>&copy; 2023 Your Course Selling Website. All rights reserved.</p>
    </footer>
  </div>
    )
}
export default Landing;




