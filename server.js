const express = require('express');
const cors= require('cors');
const app=  require('cors');
app.use=express.json();
app.post('/',(res,req)=>{
    res.send('username','password','dob', ' email')
    if(!password){
        res.send('password cannot be empty')
    }
    if(!email){
        res.send('email cannot be empty')
    }
    if (!dob){
        res.send('dob cannot be empty')
    }
    if(!username){
        res.send('username cannot be empty')
        
    }
})