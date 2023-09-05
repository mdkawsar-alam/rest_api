const { param } = require("../app");
const users=require("../model/model.user");
const {v4:uuidv4}=require("uuid");
const getAllUsers=(req,res)=>{
  res.status(200).json({users});
}
const crateUsers=(req,res)=>{
  const user={
    ida: uuidv4(),
    name: req.body.name,
    email: req.body.email
    
  }
  users.push(user)
  res.status(201).json(users);
}
const updateUsers=(req,res)=>{
  const userId =req.params.id;
  const {name,email}=req.body
  users.filter((user)=>user.id==userId)
  .map((selectedUser)=>{ selectedUser.name=name
    selectedUser.email=email

  })
  res.status(200).json(users);
}

const deleteUsers=(req,res)=>{
  const userId =req.params.id;

  const newUsers =users.filter((user)=>user.id!==userId)
  res.status(200).json(newUsers);
}

module.exports= {getAllUsers,crateUsers,updateUsers,deleteUsers}