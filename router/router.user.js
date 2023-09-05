const {getAllUsers,crateUsers, updateUsers ,deleteUsers}= require("../contraler/controler.user");

 const router =require("express").Router()
router.get("/",getAllUsers);
router.post("/",crateUsers);
router.put("/:id",updateUsers);
router.delete("/:id",deleteUsers);


  module.exports=router