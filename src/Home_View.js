import React, { Component } from 'react';
import Banner_view from './Banner_view';
import LoginForm from './LoginForm';
import './home_view.css';

class Home_View extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value : '',
         }
    }
    
    render() { 
        return ( 
            <div className='flex-container'>
             
                <div className="banner_view">
                    <Banner_view />
                 </div>

                 <div className='login_view'>
                    <LoginForm />
                 </div>
              
            </div>
         );
    }
}
 
export default Home_View;