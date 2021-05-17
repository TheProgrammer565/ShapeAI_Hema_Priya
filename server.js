const express = require("express");
const bodyParser = require("body-parser");
const app=express();
const PORT=5000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
} );

app.get("/about", function(req, res){
  res.send("<h1>Hello, You are so pretty</h1>");
} );

app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("Solution is " + result);
})

app.listen(PORT,function(){
  console.log("server is running on the port "+PORT);
});