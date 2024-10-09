const express = require('express');
const app = express();



app.use("/get",(req,res)=>{
    res.send("Hello World!");
})

app.use("/",(req,res)=>{
    res.send("Hello From The Server");
})

app.listen(5117,() =>{
    console.log("Server is running on 5117");
    
})