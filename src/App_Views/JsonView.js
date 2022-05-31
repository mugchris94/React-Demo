import React, { useState } from 'react';
import data from '../Data_json/mock-data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/view.css';


const JsonView = () => {
    const [ userdetails, setUserDetail ] = useState(data);
    return ( 
        <div>
            <table className='table-view'>
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
     );
}

export default JsonView;