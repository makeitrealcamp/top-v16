const getFileNames = require('./mymodule');

const folder = process.argv[2];
const extension = process.argv[3];

const printFiltered = (err, data) => {
    if(err) return console.log(err);
    data.map(x => console.log(x));
}

getFileNames(folder, extension, printFiltered);