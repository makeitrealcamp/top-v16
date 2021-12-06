const http = require('http');
const url = process.argv[2];
let string_collected = '';

http.get(url, function (response) {
    response.setEncoding('utf-8');
    response.on('data', function (data) { 
        string_collected = string_collected + data;        
    }); 
    response.on('end', ()=> {
        console.log(string_collected.length)
        console.log(string_collected)
    });
})
