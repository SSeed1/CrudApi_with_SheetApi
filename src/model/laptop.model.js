var con=require('./../../app.js');
const Laptop=function(Laptop){
    this.text=Laptop.text;
    this.title=Laptop.title;
    this.price=Laptop.price;
    this.manufacturer=Laptop.manufacturer;
    this.serial_number=Laptop.serial_number;
    this.processor=Laptop.processor;
    this.video_card=Laptop.video_card;
    this.col_ram=Laptop.col_ram;
    this.col_ram_vid=Laptop.col_ram_vid;
    this.year_of_issue=Laptop.year_of_issue;
};
Laptop.findById=(laptopsid,result)=>{
    con.query("SELECT * FROM laptop WHERE id=?",laptopsid,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log("найдено ноутбук:",res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:"not_found"},null);
    });
};
Laptop.getAll=result=>{
    con.query("SELECT * FROM laptop",(err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        console.log("laptops:",res);
        result(null,res);
    });
};
Laptop.create=function(newLaptop,result){
    con.query("INSERT INTO laptop set ?",newLaptop,function(err,res){
        if(err){
            console.log("erro:",err);
            result(err,null);
        }
        else
        {
            console.log(res.insertId);
            result(null,res.insertId);        }
    });
};
Laptop.findAll=function(result){
    con,query("Select * from laptop",function(err,res){
        if(err){
            console.log("error:",err);
            result(null,err);
        }
        else{
            console.log('Laptop:',res);
            result(null,res);
        }
    });
};
// Laptop.updateByid=(id,laptops,result)=>{
//     sql.query("UPDATE laptop SET title=? WHERE id=?",
//     [laptops.title,id],
//     (err,res)=>{
//         if(err){
//             console.log("error:",err);
//             result(null,err);
//             return;
//         }
//         if(res.affectedRows==0){
//             result({kind:"not_found"},null);
//             return;
//         }
//         console.log("Обновлено ноутбук",{id:id,...laptops});
//         result(nill,{id:id,...laptops});
//     }
//     );
// };