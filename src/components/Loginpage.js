import React from 'react'
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Loginpage() {
    const [showSignup, setshowsignup] = useState(true);
   
    const [warning5, setWarning5] = useState("");
    const [warning, setWarning] = useState("");
    const showsigninpage = () => {
        setshowsignup(false);
    }
     const navigate= useNavigate();
const myFunction = () => {}
const myFunction2 = () => {}
const handleloginpage=()=>{
    navigate('/Home')
}
const handleRegister =()=>{}

    const handleSignUpClick = () => {
        setshowsignup(true);
    }
    return (
        <div>

            <div className='page-home'>

                
                    
                       <div className='page'>

                        {showSignup ? (
                            <div className='loginpage'>
                                <div><input className='username' name="name" id='namesu' placeholder="username" style={{ marginLeft: '24px' }} required /></div>
                                <div><input className='email' name="email" id="mailsu" placeholder="Email" style={{ marginLeft: '28px' }} required /></div>
                                <div> <input className='password' name="password" id="passwordsu" placeholder="password" required /></div>
                               
                                <div  className='some'><button className='loginreg' type="button" id="regbutton" onClick={handleRegister}>Register</button></div>
                                <div>
                                    <div className='firsttime' >Already a user ? <button className='button-like-text' type="button" id="sinbutton" style={{ borderRadius: '15px' }} onClick={showsigninpage}>Sign In</button></div>
                                </div>
                            </div>
                        ) : (
                            <div className="loginpage" id="signin">
                                <div><input className='username' name="email" placeholder="Email" id="sinemail" style={{ marginLeft: '28px' }} required /></div>
                                <div><input className='password' name="password" placeholder="password" id="suppassword" required /></div>
                                <div className='some'><button className='loginreg' type="button" id="linbutton" onClick={handleloginpage}>Login</button></div>
                                <div className='firsttime1' >First time? <button className='button-like-text' type="button" id="supbutton" style={{ borderRadius: '15px' }} onClick={handleSignUpClick}>Sign Up</button></div>
                            </div>
                        )}
                        <p style={{ color: 'red', marginTop: "90px", marginLeft: "110px" }}>{warning}</p>
                        <p style={{ color: 'red', marginTop: "90px", marginLeft: "110px" }}>{warning5}</p>
                    </div>

                
                </div>

            
        </div>
    )
}
