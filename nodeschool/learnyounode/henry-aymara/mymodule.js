const fs = require("fs");

module.exports = function (path_dir_name, extension_name, callback) {
  fs.readdir(path_dir_name, "utf-8", (err, files) => {
    if (err) {
      return callback(err);
    }

    files = files.filter(file => file.endsWith('.' + extension_name));
    callback(null, files);
  });
};