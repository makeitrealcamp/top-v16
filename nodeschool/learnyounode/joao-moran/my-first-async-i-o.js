const fs = require('fs');
fs.readFile(process.argv[2], function (error, data) {
    if (data != null) {
        console.log(data.toString().split('\n').length - 1);
    }
});
