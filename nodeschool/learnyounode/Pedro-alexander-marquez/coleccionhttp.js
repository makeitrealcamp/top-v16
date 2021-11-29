var http = require("http");
var text = "";

http.get(process.argv[2], function(response) {
    response.on("data", function(chunk) {
        text += chunk;
    });
    response.on("end", function() {
        console.log(text.length);
        console.log(text);
    });
});