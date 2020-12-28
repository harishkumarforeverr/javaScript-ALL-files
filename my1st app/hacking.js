var express=require("express");
var app=express();
app.listen(9090);
app.use(express.static(__dirname + '/'));
var fs=require('fs');
var result;
fs.readFile('un4scontacts.vcf','utf-8',function(err,data){
result=data;
});
console.log("server is satrted at :"+9090);
app.post("/api/contactpage",function(req,res){ 
  res.send(result);
  res.end();
});
 