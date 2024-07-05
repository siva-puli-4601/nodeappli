var express=require('express')
var app=express();
app.use(express.json())
books=[
    {
        "id":1,
        "name":"siva"
    },
    {
        "id":2,
        "name":"Sathwik"
    }
]
app.get('/books',(req,res)=>
{
   res.json(books);
});
app.post('/book',(req,res)=>
{
    const id=req.body.id;
    const v=books.find(book=>book.id.toString()==id);
    return res.json(v);
    
})
app.listen(3000)