import React, { useState } from 'react'

function UpdateUser() {
    const [value, setValue] = useState()
  return (

    <div className='d-flex align-items-center justify-content-center' style={{height: '100%'}} >
                <form onChange={()=>{}}>
                    <h3 style={{color: 'darkblue'}}>Update User</h3>
                    <label htmlFor="fname" >First name:</label><br/>
                    <input placeholder='FirstName' type="text" id="fname" name="fname" value="" /><br/>
                    <label htmlFor="lname">Email :</label><br/>
                    <input placeholder='Email' type="text" id="lname" name="lname" value="" /><br/>
                    <label htmlFor="number">Age: :</label><br/>
                    <input placeholder='Number' type="number" id="number" name="number" onChange={(e)=>setValue(e.target.value)} value={value} /><br/>
                    <button className='btn btn-success' type="button">Submit</button>
                </form>
                
            </div>
  )
}

export default UpdateUser