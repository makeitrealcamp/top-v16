const mymodule = require("./mymodule");
const path_dir = process.argv[2];
const extension_name = process.argv[3];

mymodule(path_dir, extension_name, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }
  files.forEach(file => {
    console.log(file);
  });
});