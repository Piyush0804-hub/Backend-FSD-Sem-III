import express from "express";
import cors from "cors";
import fs from "fs";
import products from "./Product.json" with {type:"json"};
const app = express();
app.use(express.json());
const PORT = 3000;
app.use(cors());

app.get('/products', (req, res)=>{
    const data=fs.readFile('Product.json', 'utf8');
    const products=JSON.parse(data);
    res.json(products);
});

app.post('/products', (req, res)=>{
    fs.readFile('Product.json', 'utf8', (err, data)=>{
        if(err){
            console.error(err);
            return res.status(500).send('Error reading products');
        }
        const products=JSON.parse(data);
        const newProduct=req.body;
        products.push(newProduct);
        fs.writeFile('Product.json', JSON.stringify(products, null, 2), (err) => {
            if(err){
                console.error(err);
                res.status(500).send('Error saving product');
            } 
            else{
                res.status(201).send('Product added successfully');
            }
        });
    });
});

app.delete('/products/:id', (req, res)=>{
    const productId=req.params.id;
    fs.readFile('Product.json', 'utf8', (err, data)=>{
        if(err){
            console.error(err);
            return res.status(500).send('Error reading products');
        }
        let products=JSON.parse(data);
        const index=products.findIndex(product=>product.id==productId);
        if(index===-1){
            return res.status(404).send('Product not found');
        }
        products.splice(index, 1);
        fs.writeFile('Product.json', JSON.stringify(products, null, 2), (err) => {
            if(err){
                console.error(err);
                res.status(500).send('Error deleting product');
            } 
            else{
                res.status(200).send('Product deleted successfully');
            }
        });
    });
});
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}/products`);
});