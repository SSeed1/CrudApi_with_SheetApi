'use strict';
const express = require('express');
const app=express();
const mysql= require('mysql');
const bodyPasrser=require('body-parser');
const port=process.env.port || 5000;
app.use(bodyPasrser.urlencoded({extended:true}));
app.use(bodyPasrser.json);
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'laptops'
});
con.connect(error=>{
    if(error){
        console.log(error.message);
    }else{
        console.log("MYSQL Connected");
    }
});
// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });
const laptoproutes=require('./src/routes/laptop.routes');
app.use('/api/v1/laptops',laptoproutes);
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});