import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
    return ( 
        <div>
            <div class="alert alert-info" role="alert">
                 Login Form
            </div>
            <form>

                <label>Username </label>
                
                <input type="text" name='user_det' class="form-control" placeholder='Enter username'/>

                <label>Email </label>
                
                <input type="email" name='email_det' class="form-control" placeholder='Enter email'/>
                
                    
                <label>Password </label>

                
                <input type="password" class="form-control" name='passwd_det' placeholder='Enter email'/>
                
                
                <button type='submit' class="btn btn-primary" >
                        Login here !
                </button>

                
            </form>
        </div>
     );
}

export default LoginForm;