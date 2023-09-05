const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");

const userRouter=require("./router/router.user")



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/users",userRouter)

//home route
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/view/index.html");
});
//not found page
app.use((req,res,next)=>{
  res.status(404).json({message:"page  is not found"});
});
// error page 
app.use((error,req,res,next)=>{
  res.status(500).json({ message:"something is broken"});
})
 

module.exports=app;