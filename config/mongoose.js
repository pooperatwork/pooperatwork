// connecting mongoose with express server
const mongoose =require("mongoose");
mongoose.connect("mongodb://localhost/contactlistdb");
const db=mongoose.connection;
db.on("error",console.error.bind("console","error found"));
db.once("open",()=>{
    console.log("sucessfully connected with database");
});
