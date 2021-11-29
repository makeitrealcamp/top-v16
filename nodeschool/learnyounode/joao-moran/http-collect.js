const HTTP = require('http');
let salida = '';
HTTP.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        salida += chunk;
    })
    res.on('end', function () {
        console.log(salida.length);
        console.log(salida);
    })
})