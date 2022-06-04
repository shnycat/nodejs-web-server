const http = require("http");

const reqListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<h1>Haiiiii</h1>");
};

const server = http.createServer(reqListener);
const port = 3000,
  host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
