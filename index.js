const http = require("http");
const server = http.createServer();

const characters = require("./data-resources/smash-ult-chars");

/*

window.addEventListener("DOMContentLoaded", () => {})

myButton.addEventListener("click", () => {});

*/

server.on("request", (req, res) => {
  // On HTTP request.
  if (req.url === "/characters") {
    res.write(JSON.stringify(characters, null, 4));
    res.end();
  } else if (req.url.length === 2) { "/a /b /c"
    const letterChosen = req.url[1].toLowerCase();
    const allCharactersBeginningWith = characters.filter(char => {
        return char[0].toLowerCase() === letterChosen;
    });
    res.write(JSON.stringify(allCharactersBeginningWith, null, 4));
    res.end();
  } else {
    res.write(`
     Hello. 
     Thanks for contacting me! :) 
     You look good today!
    `);
    res.end();
  }
});

server.listen(80, () => {
  console.log("~ Server listening on port 80 ~");
});
