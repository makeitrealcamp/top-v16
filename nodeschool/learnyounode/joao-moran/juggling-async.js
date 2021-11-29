const HTTP = require('http');
let cadena = '';
const salida = [];
HTTP.get(process.argv[2], function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        cadena += data;
    })
    res.on('end', function () {
        salida.push(cadena);
        cadena = '';
        HTTP.get(process.argv[3], function (res1) {
            res1.setEncoding('utf8');
            res1.on('data', function (data) {
                cadena += data;
            })
            res1.on('end', function () {
                salida.push(cadena);
                cadena = '';
                HTTP.get(process.argv[4], function (res2) {
                    res2.setEncoding('utf8');
                    res2.on('data', function (data) {
                        cadena += data;
                    });
                    res2.on('end', function () {
                        salida.push(cadena);
                        cadena = '';
                        salida.forEach((resultado) => console.log(resultado))
                    })
                })
            })
        })
    })
})