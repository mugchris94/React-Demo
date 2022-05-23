import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return ( 
        <div className='banner-d'>
            <div class="card">
                <div class="card-header">
                    My Web Portforio
                </div>
                <div class="card-body">
                    <h5 class="card-title">Neuralink</h5>
                    <p class="card-text">The goal of Neuralink is to create a device that can help enhance the human brain's cognitive capabilities. This device would be used for both therapeutic and non-therapeutic reasons. However, Neuralink is currently focused on making medical devices</p>
                    <a href="#" class="btn btn-primary">Have a Tour !</a>
                </div>
            </div>
        </div>
     );
}

export default Banner;