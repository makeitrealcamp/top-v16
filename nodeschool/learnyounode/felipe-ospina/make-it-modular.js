const mymodule = require("./mymodule");
const path = process.argv[2];
const extension = process.argv[3];

mymodule(path, extension, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach(file => {
    console.log(file);
  });
});

