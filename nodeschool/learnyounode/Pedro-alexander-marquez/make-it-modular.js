var filterFn = require("./mymodule.js");

filterFn(process.argv[2], process.argv[3], function(err, list) {
    if (err) return console.error("ocurrio un error:", err);

    list.forEach(function(file) {
        console.log(file);
    });
});