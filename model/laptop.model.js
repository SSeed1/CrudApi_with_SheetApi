const Laptop=function(Laptop){
    this.text=Laptop.text;
};
Laptop.findById=(laptopsid,result)=>{
    sql.query(`SELECT * FROM laptop WHERE id=${laptopsid}`,(err,res)=>{
        if(err){
            console.log("error:",err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log("найдено ноутбук",res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:"not_found"},null);
    });
};
Laptop.getAll=result=>{
    sql.query("SELECT * FROM laptop",(err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        console.log("laptops:",res);
        result(null,res);
    });
};
Laptop.updateByid=(id,laptops,result)=>{
    sql.query("UPDATE laptop SET title=? WHERE id=?",
    [laptops.title,id],
    (err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        if(res.affectedRows==0){
            result({kind:"not_found"},null);
            return;
        }
        console.log("Обновлено ноутбук",{id:id,...laptops});
        result(nill,{id:id,...laptops});
    }
    );
};