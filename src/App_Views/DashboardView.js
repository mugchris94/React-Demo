import React, { useState } from 'react';
import data from '../Data_json/mock-data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../images/instagram.png';
import calendar from '../images/calendar.png';
import '../styles/view.css';
import '../styles/dashStats.css';

const DashboardView = () => {
    const [ userdetails, setUserDetail ] = useState(data);
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

                <div className='addItem'>

                    <label id="addTitle">Add an Item in Stock</label>
                    <form method='#'>
                    
                        <label> Enter Fullname</label>
                        <br/>
                        <input type='text' name="fullname" placeholder='Enter name' value='' required />
                        <br/>
                        <label> Enter Address</label>
                        <br/>
                        <input type='text' name="address" placeholder='Enter Address' value='' required />
                        <br/>
                        <label> Enter Phone number</label><br/>
                        <input type='text' name="phoneNumber" placeholder='Enter Phone number' value='' required /> 
                        <br/>
                        <label> Enter Your email</label><br/>
                        <input type='text' name="email" placeholder='Enter Company name' value='' required />
                        <br/>
                        <input type="submit" value='Add Item' name='addItem' required />
                        
                    </form>
                </div>

            </div>

            <div className='table-container'>

                <div className='topheader'>
                    <label className='dash'>Dashboard</label>
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

                <table >
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>phone</th>
                            <th>Company Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdetails.map((user_detail) => (
                            <tr>
                                <td>{ user_detail.name }</td>
                                <td>{ user_detail.username }</td>
                                <td>{ user_detail.phone }</td>
                                <td>{ user_detail.company.name }</td>
                                <td>
            
                                    <button id='viewdetBtn'>View Details</button>
                                </td>
                            </tr>
                        ))

                        }
                        
                    </tbody>
                </table>
                    
            </div>
            
        </div>
     );
}

export default DashboardView;