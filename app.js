var http=require('http')
http.createServer((req,res)=>{
    res.write(req.url);
    console.log("h;ello");
    res.end();
}).listen(8000)
