var express = require('express');
var app = express();
var port = 1129 
var fs = require('fs');
app.get('/',function(req,res){
    res.end('hello world!');
});
app.get("/list_movies",(req,res) =>{
    fs.readFile(__dirname + '/' +'movies.json','utf8',(err,data)=>{
        res.end(data);
    });
});
app.listen(port,()=>{
    console.log("app listening at http://localhoost:1129/list_movies")
});
