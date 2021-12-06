const http = require("http");

const urls = [process.argv[4], process.argv[3], process.argv[2]];

function doRequest(url) {
    return new Promise((resolve, reject) => {
        let string_collected = "";
        http.get(url, function (response) {
            response.setEncoding("utf-8");
            response.on("data", function (data) {
                string_collected = string_collected + data;
            });
            response.on("end", () => {
                resolve(string_collected);
            });
        });
    });
}

function executeRequests() {
    urls.forEach(async url => {
        let x = await doRequest(url);
        console.log(x);
    });
    
}
executeRequests();
