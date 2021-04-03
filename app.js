'use strict';
const fs=require('fs');
const readline=require('readline');
const {google}=require('googleapis');
const keys=require('./npm-googlespreadsheet-tut-36730a90b708.json');
const express = require('express');
const app=express();
const mysql= require('mysql');
const bodyPasrser=require('body-parser');
const port=process.env.port || 5000;
app.use(bodyPasrser.urlencoded({extended:true}));
app.use(bodyPasrser.json);
const client=new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);
client.authorize(function(err,tokens){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Connected');
    }
});
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