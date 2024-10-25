const express = require("express");
const app = express();
const {authAdmin} = require("./src/middleware/admin");
const connectDB = require("./src/config/database");
const User = require("./src/models/user");


app.use(express.json());


app.use("/admin",authAdmin);


app.get("/",(req,res) =>{
    res.send("Hello Home");
})
// app.use("/login",(req,res) =>{
//     res.send("Login");
// })


// // app.post("/signup",(req,res) =>{

     

// //     const user = new User(req.body);
// // try{
// //     user.save();
// //     res.send("Data send Successfully")
// // }
// // catch (error){
// //     res.status(404).send("Something Went wrong");
// // }
    
// // })

// app.get("/getUserData", async(req,res)=>{
//     const userEmail = req.body.email;
//     console.log(userEmail);
    
//     try{
//         const user = await User.findOne({email: userEmail})
//         res.send(user);

//     }
//     catch (error){
//         res.status(404).send("Something Went wrong");
//     }
// })

// app.get("/getAllUser", async(req,res)=>{
     
//     try{
//         const user = await User.find();
//         res.send(user);

//     }
//     catch (error){
//         res.status(404).send("Something Went wrong");
//     }
// })


// app.get("/admin/getUserData",(req,res,next) =>{
     
//         res.send("User data is send")
    
// });

// app.post("/admin/postUser",(req,res,next) =>{
     
//     res.send("User data is created")

// });

// app.use("/signup",(req,res) =>{
//     res.send("Signup");
// })

app.listen(5117,()=>{
    console.log("Server is listening on port 5117");

connectDB() ;
 
   
    
})


