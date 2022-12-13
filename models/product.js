const product = [];
const path=require('path');
const fs=require('fs');
const { json } = require('body-parser');
const { parse } = require('path');





function fetchdata(cb)
{
    fs.readFile("product.json",(err,data)=>{
        if(err)
        {
            cb([]); 
        }
        else
        {
             cb(JSON.parse(data));
        }
    })

};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    };



    save() {
      //  console.log(fetchdata());
      //  fs.readFile('product.json',(err,datas)=>{
           // console.log(this);
           // let products=[];
            fetchdata(products=>{
                products.push(this);
                fs.writeFile('product.json', JSON.stringify(products),(err)=>{
                    console.log(err);
                });
            })
            // if(!err && datas.length>0)
            // {
                
            //     products=JSON.parse(datas);
            // }
           
            // console.log("first");
            
       // });
    };

    static fetchAll(cb) {
      //  return product;
         let datas;
        //  fs.readFile("product.json",datas=(err,data)=>{
        //     if(err)
        //     {
        //         cb([]);       
        //     }
        //     cb(JSON.parse(data));
             
        // })
        fetchdata(cb);
         
       
    }
}