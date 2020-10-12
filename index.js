const http = require("http");
const server = http.createServer();

/*

window.addEventListener("DOMContentLoaded", () => {})

myButton.addEventListener("click", () => {});

*/

server.on("request", (req, res) => { // On HTTP request.
    res.write(`
     Hello. 
     Thanks for contacting me! :) 
     You look good today!
     ${req.socket.localAddress}
    `);
    res.end();
});

server.listen(80, () => {
    console.log("~ Server listening on port 80 ~");
});