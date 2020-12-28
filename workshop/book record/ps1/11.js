const http=require('http');
const hostname='127.0.0.1';
const port=7890;
function f1(req,res)
{
    req.statuscode=200;
    res.setHeader('content','text/plain');
    res.end("welcome to my world ");
}
const server=http.createServer(f1);
server.listen(port,hostname, ()=>{console.log(`server started at : ${hostname} :  ${port}`);});
