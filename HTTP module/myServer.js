//Create my own server using http module
import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Hello World</h1>");
    res.write("Welcome to my server");
    res.end();
})
server.listen(8000, ()=>{
    console.log("Server is running on port 8000 http://localhost:8000/");
})