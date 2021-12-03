const fs = require("fs");

let path_dir = process.argv[2];
let extension_name = process.argv[3];

fs.readdir(path_dir, function callback(err, list) {
    /* console.log(list)
    console.log(extension_name) */
    const filtered = list.filter((elem) => elem.includes("." + extension_name));
    filtered.forEach((element) => {
        console.log(element);
    });
});
