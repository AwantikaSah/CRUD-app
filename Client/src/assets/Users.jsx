import React, { useState } from 'react'
import {Link} from "react-router-dom";


function Users() {
    const [users, setUsers] = useState([{
        Name: "Awantika", Age: 23, Email: "awantikasah33@gmail.com"

    }])
  return (
    
    <div>
        <Link to="/create" className='btn btn-success'>Add +</Link>

<table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email </th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
        users.map((user) => {
            return(
            <tr>
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td>{user.Email}</td>
                <td>{user.Action}</td>
                <td>
                <Link to="/update" className='btn btn-success'>Edit </Link>
                    <button className='btn btn-success'>Delete</button></td>
            </tr>
            )
        })
    }


  </tbody>
</table>
       
 
    </div>
  )
}

export default Users