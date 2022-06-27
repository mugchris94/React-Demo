import React, { Component } from 'react';

function AddItemForm() {
    return ( 
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
     );
}

export default AddItemForm;


















