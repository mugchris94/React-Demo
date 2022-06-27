import React, { useState } from 'react';
import data from '../Data_json/mock-data.json';
import '../styles/Item.css';



 function ItemTable() {
    const [ userdetails, setUserDetail ] = useState(data);
    return (
         
        <div className='Item_table'>
            <table >
                    <thead>
                        <tr id='tableheader'>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone</th>
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
     );
 }
 
 export default ItemTable;