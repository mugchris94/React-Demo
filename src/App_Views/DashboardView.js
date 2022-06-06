import React, { useState } from 'react';
import data from '../Data_json/mock-data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/view.css';


const DashboardView = () => {
    const [ userdetails, setUserDetail ] = useState(data);
    return ( 
        <div className='flex_dashboard'>

            <div className='menu_view'>
                <nav>
                    <label></label>
                    <ul>
                        <li><span><img scr='S'/></span>Requests</li>
                        <li><span></span>Stock_Users</li>
                        <li><span></span>Stock_items</li>

                    </ul>
                </nav>

                <div className='addItem'>
                    <form method='#'>
                    
                        <label> Enter name</label>
                        <br/>
                        <input type='text' placeholder='Enter name' value=''/><br/>
                        <label> Enter username</label><br/>
                        <input type='text' placeholder='Enter username' value=''/>
                        <br/>
                        <label> Enter Phone number</label><br/>
                        <input type='text' placeholder='Enter Phone number' value=''/><br/>
                        <label> Enter Company Name</label><br/>
                        <input type='text' placeholder='Enter Company name' value=''/>
                        <br/>
                        <input type="submit" value='Add Item' name='addItem'/>
                        
                    </form>
                </div>

            </div>

            <div className='table-container'>
                <table >
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>phone</th>
                            <th>Company Name</th>
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