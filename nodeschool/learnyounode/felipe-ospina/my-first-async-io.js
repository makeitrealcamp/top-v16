const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  }
  const lines = data.toString().split("\n");
  console.log(lines.length - 1);
});
