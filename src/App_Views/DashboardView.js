import React, { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../images/instagram.png';
import calendar from '../images/calendar.png';
import '../styles/view.css';
import '../styles/dashStats.css';
import AddItemForm from './AddItemForm';
import ItemTable from './ItemTable';

const DashboardView = () => {
    
    return ( 
        <div className='flex_dashboard'>

            <div className='menu_view'>
                <nav>
                    
                    <ul>
                        <li><span></span>Requests</li>
                        <li><span></span>Stock_Users</li>
                        <li><span></span>Stock_items</li>

                    </ul>
                </nav>

                <AddItemForm />

            </div>

            <div className='table-container'>

                <div className='topheader'>
                    <label className='dash'># Admin Dashboard</label>
                    <div className='dashTotals'>
                        <div className='stats'>
                            <img src={icon} alt='icon' />
                              <ul>
                                 <li>
                                    <label>50 followers</label>
                                 </li>
                                 <li>
                                    <label>10k Likes</label>
                                 </li>
                                
                              </ul> 
                        </div>
                        <div className='stats'>
                            <img src={icon} alt='icon' />
                              <ul>
                                 <li>
                                    <label>50 followers</label>
                                 </li>
                                 <li>
                                    <label>10k Likes</label>
                                 </li>
                                
                              </ul> 
                        </div>
                        <div className='stats'>
                            <img src={calendar} alt='calendar' />
                              <ul>
                                 <li>
                                    <label>50 followers</label>
                                 </li>
                                 <li>
                                    <label>10k Likes</label>
                                 </li>
                                
                              </ul> 
                        </div>  
                    </div>

                </div>

                <ItemTable/>
            </div>
            
        </div>
     );
}

export default DashboardView;