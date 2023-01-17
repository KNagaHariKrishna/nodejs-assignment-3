const fs=require("fs")

fs.writeFile("index.html",`<h1> Hello World </h1> 
<p> This is {Hari Krishna}... </p>`,(err)=>{console.log(err);})

const http = require("http");

const server = http.createServer((req, res) => {

    fs.readFile("./index.html", "utf8", (err, data) => {
    res.writeHead(200, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        });
    res.end(data)
    })
})

server.listen(5000, () => console.log("Srver Srarted"));