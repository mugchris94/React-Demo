import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Banner_view = (props) => {
    return ( 
        <div className='banner-d'>
            <div className="card">
                <div className="card-header">
                    <em>This is the future of Techy {props.title}</em>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Neuralink</h5>
                    <p className="card-text">The goal of Neuralink is to create a device that can help enhance the human brain's cognitive capabilities. This device would be used for both therapeutic and non-therapeutic reasons. However, Neuralink is currently focused on making medical devices</p>
                    <Link to="/JsonView">Have a Tour !</Link>
                </div>
            </div>
        </div>
     );
}

export default Banner_view;