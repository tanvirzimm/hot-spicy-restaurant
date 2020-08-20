import React from 'react';
import { useAuth } from '../Auth/Auth';
import logo from '../../images/hot-spicy.png';
import './Login.css';
const Login = () => {
    const auth = useAuth();

   
    const handleGoogleSignIn = () => {
        auth.googleSign().then(()=>{
            window.location.pathname = '/cart';
        })
    }


    const handleGoogleSignOut = () => {
        auth.signOut().then(()=>{
            window.location.pathname = '/';
        })
    }

    console.log(auth);
    return (
        <div className="container d-flex flex-column align-items-center login-body">
            <div className="logo-box">
                <img src={logo} alt=""/>

            </div>

            {
                auth.user &&
                <div className="user-info d-flex justify-content-center">
                <h1>Name : {auth.user.name}</h1>
                <h1>Email : {auth.user.email}</h1>
               </div>
            }
            
  
                    {
                        auth.user ? <button className='sign-button' onClick={handleGoogleSignOut}>Sign Out</button> :<button className='sign-button' onClick={handleGoogleSignIn}>Sign in with google</button>
                    }
        </div>
    );
};

export default Login;