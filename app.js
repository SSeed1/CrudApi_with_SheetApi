'use strict';
const express = require('express');
const app=express();
const mysql= require('mysql');
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
