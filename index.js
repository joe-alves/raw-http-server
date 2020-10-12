const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    res.write(`
     Hello. 
     Thanks for contacting me! :) 
     You look good today!
    `);
    res.end();
});

server.listen(80, () => {
    console.log("~ Server listening on port 80 ~");
});