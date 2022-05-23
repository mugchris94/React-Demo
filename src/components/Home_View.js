import React, { Component } from 'react';
import Banner from './Banner';
import LoginForm from './LoginForm';
import './cstyles/home_view.css';

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
             
            
              <div class="row">
                <div className="col-md-7">
                    <Banner />
                 </div>

                 <div className='col-md-3'>
                    <LoginForm />
                 </div>
              </div>
            </div>
         );
    }
}
 
export default Home_View;