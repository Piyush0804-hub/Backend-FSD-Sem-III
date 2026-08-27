//Practice routing using http module
import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    if(req.url==="/"){
        res.end("<h1>Welcome  to my Home Page</h1>");
    }
    else if(req.url==="/about"){
        res.end("<h1>Welcome  to my About Page</h1>");
    }
    else if(req.url==="/contact"){
        res.end("<h1>Welcome  to my Contact Page</h1>");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>404 Page Not Found</h1>");
    }
})
server.listen(3000, ()=>{
    console.log("Server is running on port 3000 http://localhost:3000/")
})