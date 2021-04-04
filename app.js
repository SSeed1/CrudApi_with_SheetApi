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
        gsrun(client);
    }
});
async function gsrun(cl){
    const gsapi= google.sheets({version:'v4',auth:cl});
    const opt= {
        spreadsheetId:'1HbE65BzI7eP1I_jqoMEA8j140Jks_8qC1OscrBLmaIc',
        range:'A1:J4'
    };
    let data  = await gsapi.spreadsheets.values.get(opt);
    let dataArray=data.data.values;
    let newDataArray=dataArray.map(function(r){
        console.log(`${r[0]}||${r[1]}||${r[2]}||${r[3]}||${r[4]}||${r[5]}||${r[6]}||${r[7]}||${r[8]}||${r[9]}||${r[10]}`);
    });

    // const updateOptions= {
    //     spreadsheetId:'1HbE65BzI7eP1I_jqoMEA8j140Jks_8qC1OscrBLmaIc',
    //     range:'A1:J4',
    //     valueInputOption:'USER_ENTERED',
    //     response:{values:newDataArray}
    // };
    // let responsed= await gsapi.spreadsheets.values.update(updateOptions);
    // console.log(responsed);
}

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