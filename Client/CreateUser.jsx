import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'



const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3025/createUser", { name, email, age })
        .then(results => console.log(results))
        .catch(err => console.log(err))
}


function CreateUser() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100%' }} >
            <form onSubmit={Submit}>
                <h3 style={{ color: 'darkblue' }}>Add User</h3>
                <label htmlFor="fname" >First name:</label><br />
                <input placeholder='FirstName' type="text" id="fname" name="fname" defaultValue=""
                    onChange={(e) => setName(e.target.value)} /><br />

                <label htmlFor="lname">Email :</label><br />
                <input placeholder='Email' type="text" id="lname" name="lname" defaultValue=""
                    onChange={(e) => setEmail(e.target.value)} /><br />

                <label htmlFor="number">Number: :</label><br />
                <input placeholder='Number' type="number" id="number" name="number" defaultValue=""
                    onChange={(e) => setAge(e.target.value)} /><br />
                <button className='btn btn-success' type="button">Submit</button>
            </form>

        </div>
    )
}

export default CreateUser