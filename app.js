'use strict';
const express = require('express');
const app=express();
const mysql= require('mysql');
const bodyPasrser=require('body-parser');
//const Cryptr=require ('bcryptr');
//const crypt=new Cryptr('12345678');
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
app.use(bodyPasrser.json());
app.use(bodyPasrser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.json({message:"Стартовая старница"});
});

app.listen(3000,()=>{
    console.log("port 3000 listened");
});