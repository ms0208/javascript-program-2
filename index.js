const http = require("http");
http.createServer((req,resp)=>{

    resp.write("Hello World");
    resp.end();
}).listen(4001);