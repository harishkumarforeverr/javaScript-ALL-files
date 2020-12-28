var http=require('http');
function f1(req,res){
    
    res.writeHeader(200,{'content-type':'text/plain'});
    res.writte("message is injecte d hddtyd y dfddssssssssssssssssshd by the javacsript ");
    res.end();
}
http.createServer(f1).listen(9001);
console.log('server is created at 9000 ');
