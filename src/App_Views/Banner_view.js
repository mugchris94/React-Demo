import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner_view = () => {
    return ( 
        <div className='banner-d'>
            <div className="card">
                <div className="card-header">
                    My Web Portforio
                </div>
                <div className="card-body">
                    <h5 className="card-title">Neuralink</h5>
                    <p className="card-text">The goal of Neuralink is to create a device that can help enhance the human brain's cognitive capabilities. This device would be used for both therapeutic and non-therapeutic reasons. However, Neuralink is currently focused on making medical devices</p>
                    <a href="" className="#">Have a Tour !</a>
                </div>
            </div>
        </div>
     );
}

export default Banner_view;