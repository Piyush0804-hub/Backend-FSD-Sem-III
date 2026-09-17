import {useState, useEffect} from 'react';
const App=()=>{
  return(
    const[products, setProducts]=useState([]);
    const[name, setName]=useState('');
    const[category, setCategory]=useState('');
    const[price, setPrice]=useState('');
    const[brand, setBrand]=useState('');
    const[rating, setRating]=useState('');
    const[stock, setStock]=useState('');

    const getProducts=async()=>{
      const response=await fetch('http://localhost:3000/products');
      const data=await response.json();
      setProducts(data);
    }

    //add product
    const addProduct=async(e)=>{
      e.preventDefault();
      const newProduct={
        name:name,
        category:category,
        price:price,
        brand:brand,
        rating:rating,
        stock:stock
      };
      await fetch('http://localhost:3000/products',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(newProduct)
      });
    

    <div>
      <h1>Welcome to React API</h1>
    </div>
  )
}



export default App;