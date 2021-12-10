const http = require('http');
let body = '';
http.get(process.argv[2], function(response){
    response.setEncoding('utf8')
    response.on('data',  function(chunk){
        body += chunk;
    } );
    response.on('error',  console.error);
    response.on('end',function(){
        console.log(body.length);
        console.log(body.toString());
    })
})