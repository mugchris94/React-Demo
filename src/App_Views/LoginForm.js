import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

const LoginForm = () => {
    return ( 
        <div>
            <div class="alert alert-danger" role="alert">
                <a href="#" id="logheader">Login Form</a>
            </div>
            <form>

                <label className='label'>Username </label>
                
                <input type="text" name='user_input' class="user_input" placeholder='Enter username'/>

                    
                <label className='label' >Password </label>

                
                <input type="password" class="password_input" name='passwd_det' placeholder='Enter email'/>
                
                
                <button type='submit' class="subtn" >
                        <span>Login</span>
                </button>

                
            </form>
        </div>
     );
}

export default LoginForm;