const express=require('express');
//importing express and creating an instance of express app
const app=express();
//importing port from the config file 
const {PORT}=require('./config/server.config');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.get('/ping',(req,res)=>{
    return res.json({message :"Problem service is alive"});
});
//to run the server write "npm run dev" command on the terminal

app.listen(PORT,()=>{
    console.log(`Problem service is running on port ${PORT}`);
});


