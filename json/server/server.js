const http = require('http');
const url = require('url');
const port = 3000;
const fs = require('fs')


const server  = http.createServer((req,res)=>{
    const req_url = req.url;
    console.log("req-url",req_url)


    const parsed_url = url.parse(req_url);
    console.log("parsed-url",parsed_url);

    if(parsed_url.pathname === '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(fs.readFileSync("../client/index.html"))
    }
    else if(parsed_url.pathname === '/json'){
        res.writeHead(200,{'Content-Type' : 'text/json'})
        res.end(fs.readFileSync('../server/datas.json'))
    }
    else if(parsed_url.pathname === '/index.js'){
        res.writeHead(200,{'Content-Type' : 'text/javascript'});
        res.end(fs.readFileSync('../client/index.js'));
    }
   
})

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)

})