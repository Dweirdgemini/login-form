import React from 'react';
import "./loginform.css"

const LoginForm = () => {
    return (
        <div className='cover'>
            <h1>LOGIN</h1>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>

        </div>
    )

}

export default LoginForm