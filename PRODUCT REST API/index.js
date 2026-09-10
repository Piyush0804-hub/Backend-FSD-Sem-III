//Create a PRODUCT REST API and test all methods in THUNDER CLIENT
//work it on approx 100 products and test all the methods in THUNDER CLIENT
//Stucture
//1. Create folder named PRODUCT REST API
//2. Create a file named index.js
//3. Create a file named Product.json
//4. Install npm init :package.json
//5. Install npm install express:npm i express


import express from "express";
import products from "./Product.json" with {type:"json"};
const app=express();
app.use(express.json());

app.get("/products",(req,res)=>{
    res.json(products);
});

app.post("/products",(req,res)=>{
    const newProduct=req.body;
    products.push(newProduct);
    res.json(products);
});

app.put("/products/:id",(req, res)=>{
    let product=products.find(p=>p.id==req.params.id);
    product.name=req.body.name;
    product.price=req.body.price;
    product.stock=req.body.stock;
    res.json(products);
});

app.delete("/products/:id",(req, res)=>{
    products=products.filter(p=>p.id!=req.params.id);
    res.send("Product deleted successfully");
});

app.listen(9000,()=>{
    console.log("Server is running on port 9000, http://localhost:9000/products");
});
