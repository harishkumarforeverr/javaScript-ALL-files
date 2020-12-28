var http=require('http');
var fs=require('fs');
http.createServer( function(req,res)
{
    fs.readFile('./2.html', function (err,data)
    {
        if(err)
        {
            res.writeHeader(404);
            res.write("page not loaded 404 error ");
        }
        else
        {
            res.writeHeader(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        }
    });
}).listen(9090);
console.log("server create at 9090 ");