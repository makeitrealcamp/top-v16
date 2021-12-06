const async = require("async");
const http = require("http");
const urls = [process.argv[2], process.argv[3], process.argv[4]];

// async.series(
//   [
//     function (callback) {
//       http.get(url[0], res => {
//         res.setEncoding("utf-8");
//         let rawData = "";
//         res.on("data", chunk => {
//           rawData += chunk;
//         });
//         res.on("end", () => {
//           callback(null, rawData);
//         });
//       });
//     },
//     function (callback) {
//       http.get(url[1], res => {
//         res.setEncoding("utf-8");
//         let rawData = "";
//         res.on("data", chunk => {
//           rawData += chunk;
//         });
//         res.on("end", () => {
//           callback(null, rawData);
//         });
//       });
//     },
//     function (callback) {
//       http.get(url[2], res => {
//         res.setEncoding("utf-8");
//         let rawData = "";
//         res.on("data", chunk => {
//           rawData += chunk;
//         });
//         res.on("end", () => {
//           callback(null, rawData);
//         });
//       });
//     },
//   ],
//   function (err, data) {
//     data.forEach(el => console.log(el));
//   }
// );

function getText(url, callback) {
  http.get(url, res => {
    res.setEncoding("utf-8");
    let rawData = "";
    res.on("data", chunk => {
      rawData += chunk;
    });
    res.on("end", () => {
      callback(rawData);
    });
  });
}

getText(urls[0], res => {
  console.log(res);
  getText(urls[1], res => {
    console.log(res);
    getText(urls[2], res => {
      console.log(res);
    });
  });
});
