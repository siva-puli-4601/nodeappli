var http=require('http')
var data="";
http.createServer((req,res)=>
{
    res.write(data);
    res.end();
  console.log("server build");
}).listen(8000)


var options={
    hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts/1',
  method: 'GET'
};

var req=http.request(options,(res)=>{
    res.on('data',(c)=>{
        data+=c;
    });
    res.on('end',()=>{
        console.log(JSON.parse(data));
    });
    res.on("error",()=>
    {
        console.log("error");
    })
})
req.end();