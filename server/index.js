const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./Models/Users')


const app = express()
const setCspHeader = (req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; connect-src 'self' http://localhost:3025"
    );
    next();
  };
app.use(setCspHeader)
app.use(cors({origin: 'http://localhost:3025'}))
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/createUser",(req, res)=>{
    //{ firstName: 'fd', number: 567}

    console.log('create user')
    UserModel.create(req.body)
    .then(users => res.json(user))
    .catch(err => res.json(err))
})


app.listen(3025, ()=>{
    console.log("The server is running")
})

