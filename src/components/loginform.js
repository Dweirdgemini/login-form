import React from 'react';
import "./loginform.css"

const LoginForm = () => {
    return (
        <div className='cover'>
            <h1>LOGIN</h1>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>




        <div className='login-btn'>Login</div>

        <p className='text'>or login using</p>
        
        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='gmail'></div>
        </div>

        </div>
    )

}

export default LoginForm