const express = require('express');
const cors= require('cors');
const app = cors();
app.use = express.json();
app.post('/',(res,req)=>{
    console.log('backend is running')
})
