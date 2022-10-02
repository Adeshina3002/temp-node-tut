const http = require("http");

const PORT = 3020;

const HOSTNAME = "localhost";

function requestHandler(req, res) {
  if (req.url === "/" && req.method === "GET") {

    // res.setHeader("Content-Type", "application/json")
    res.writeHead(200);
    // res.write("Welcome to my page")
    res.end("Welcome to my page");

  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200);
    // res.write("Here is a short history about us")
    res.end("Here is a short history about us");
  } else {
    res.end(`
    <h1>Oooops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">return to Home page</a>
   `);
  }
  

}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening at http://${HOSTNAME}:${PORT}`);
});
