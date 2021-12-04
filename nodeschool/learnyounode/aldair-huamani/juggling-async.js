const http = require('http');

function print (index){
    getData(process.argv[index], data => {
        console.log(data);
        if(index<process.argv.length){
            print(index+1);
        }
    
    })
}

function getData(url, callback){
    http.get(url, function(response){
        response.setEncoding('utf8');
        let data='';
        response.on('data', function(chunk){
            data += chunk;
        })
        response.on('error',  console.error);
        response.on('end', function(){
            callback(data);
        })
    })
}

print(2);
