
var express=require("express")
var app=express();
app.use(express.json())
const axios = require('axios');
app.post("/azureai",(req,res)=>{
let data = JSON.stringify({
  "messages": [
    {
      "role": "system",
      "content": "You are an AI assistant that helps people find information."
    },
    {
      "role": "user",
      "content": `${req.body.name}`
    }
  ],
  "max_tokens": 800,
  "temperature": 0.7,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "top_p": 0.95,
  "stop": null
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://sivareddy.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-02-15-preview',
  headers: { 
    'Content-Type': 'application/json', 
    'api-key': '2c11d0f9790c4bafb9687b73c9668628'
  },
  data : data
};

axios.request(config)
.then((response) => {
    res.json(response.data.choices[0].message);
})
.catch((error) => {
  console.log(error);
});
});
app.listen(9000);
