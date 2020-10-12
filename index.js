const http = require("http");
const fs = require("fs");
const server = http.createServer();

const characters = require("./data-resources/smash-ult-chars");

/*
window.addEventListener("DOMContentLoaded", () => {})
myButton.addEventListener("click", () => {});
*/

const randomizedResponseDelay = (dataToWrite, res) => {
  const randomNumberAtLeastOneSecond = 1000 + Math.floor(Math.random() * 3000);
  setTimeout(() => {
    res.write(dataToWrite);
    res.end();
  }, randomNumberAtLeastOneSecond);
};

server.on("request", (req, res) => {
  // On HTTP request.
  if (req.url === "/characters") {
    randomizedResponseDelay(JSON.stringify(characters, null, 4), res);
  } else if (req.url.length === 2) {
    ("/a /b /c");
    const letterChosen = req.url[1].toLowerCase();
    const allCharactersBeginningWith = characters.filter((char) => {
      return char[0].toLowerCase() === letterChosen;
    });
    randomizedResponseDelay(
      JSON.stringify(allCharactersBeginningWith, null, 4),
      res
    );
  } else if (req.url === "/hello") {
    fs.appendFile("./greetings.txt", "hello");
    res.write("Your hello has been recorded!");
    res.end();
  } else {
    res.writeHead(404);
    res.write(`
     Hello. 
     Thanks for contacting me! :) 
     You look good today!
     But I dunno what you want?
    `);
    res.end();
  }
});

server.listen(80, () => {
  console.log("~ Server listening on port 80 ~");
});
