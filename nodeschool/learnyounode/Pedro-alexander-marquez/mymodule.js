var fs = require("fs");
var path = require("path");

module.exports = function(directorio, extension, callback) {
    fs.readdir(directorio, function(err, list) {
        if (err) return callback(err);

        list = list.filter(function(file) {
            return path.extname(file) === "." + extension;
        });

        callback(null, list);
    });
};