const { urlencoded, json } = require("express");
const express=require("express");
const path=require("path");
const entry=require("../models/schema.js");
const app=express();
const port=6969;
const db=require("../config/mongoose.js");
app.use(express.urlencoded());
app.use(express.static("../"));
app.set("view engine","ejs");
app.set("views","../views");
app.listen(port,(err)=>{if(err)console.log(err);
else console.log("server is running via port : ",port)});
app.post("/",(req,res)=>{
    entry.create({"name":req.body.name,"phone":req.body.phone},(err,doc)=>{
        if(err)console.log(err);
    });
    console.log(req.body);
    res.redirect("back");
});
app.get("/",(req,res)=>{
    entry.find({},(err,values)=>{if(err)console.log(err);
    res.render("index",{valuearr:values});
});
});
app.get("/delete/",(req,res)=>{
    let qval=req.query.val;
    let strqval=JSON.stringify(qval);
    let jsonval=JSON.parse(strqval);
    console.log(typeof(jsonval));
//  entry.findByIdAndDelete(queryvalue,(err)=>{if(err)console.log(err)
     res.redirect("back");});
