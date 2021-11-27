const fs = require("fs");

module.exports = function (dirName, fileExt, callback) {
  fs.readdir(dirName, "utf-8", (err, files) => {
    if (err) {
      return callback(err);
    }

    files = files.filter(file => file.endsWith(`.${fileExt}`));
    callback(null, files);
  });
};
