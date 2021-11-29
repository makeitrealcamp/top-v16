const my_module = require('./mymodule.js');
my_module(process.argv[2], process.argv[3], function (err, data) {
    if (err) console.log(err)
    data.forEach((file) => console.log(file));
});