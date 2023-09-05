
const {v4:uuidv4}=require("uuid")
const users=[
    {
        id: uuidv4(),
        name:"sakib",
        email:"sakib@gmil.com"

    },
    {
        id: uuidv4(),
        name:"arif",
        email:"arif@gmil.com"

    }
];
module.exports=users;