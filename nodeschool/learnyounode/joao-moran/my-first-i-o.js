const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const cadena = buffer.toString();
console.log(cadena.split('\n').length - 1);