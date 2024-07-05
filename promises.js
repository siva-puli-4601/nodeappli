var express=require('express')
var app=express();

function hai()
{
    return new Promise((resolve,reject)=>
        {
    setTimeout(()=>{
           console.log("hello world from hai");
            const error=true;
            if(error)
                 resolve();
            else
                 reject();
        
    },2000);
});
}

function bye()
{
    console.log("bye");
}
hai().
then(bye()).
catch(err=>console.log("error"));

app.listen(1000,()=>{console.log("hai i am 1000")})


async function rec()
{
   var data=await fetch("https://jsonplaceholder.typicode.com/posts");
   var res=await data.json();
   console.log(res);
}
rec();