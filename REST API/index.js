import express from "express";

const app=express();
app.use(express.json());

let users=[
    {id:1, name:"Piyush", age:25},
    {id:2, name:"Pawan", age:15},
    {id:3, name:"Purohit", age:20},
    {id:4, name:"Sahaj", age:20},
];
//Get : get request to fetch all users
app.get("/users",(req, res)=>{
    res.json(users);
});
//Post : post request to add new user
app.post("/users",(req, res)=>{
    const newUser={id:users.length+1, name:req.body.name, age:req.body.age};
    users.push(newUser);
    res.json(users);
});

//PUT: put request to update user
app.put("/users/:id",(req, res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    user.age=req.body.age;
    res.json(users);
});

//DELETE: request to delete a user
app.delete('/users/:id', (req, res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.send("User deleted successfully")
});
app.listen(3000, ()=>{
    console.log("Server is running on port 3000 http://localhost:3000");
});