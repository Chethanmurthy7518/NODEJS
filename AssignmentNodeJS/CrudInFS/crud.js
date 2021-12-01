const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const products = fs.readFileSync("Assignment/CrudInFS/products.json");

    console.log(products.toString());

    const reqUrl = url.parse(req.url, true);

    const path = reqUrl.pathname;

    if (path === "/products" && req.method === "GET") {
      res.end(products);
    } else if (path === "/products" && req.method === "POST") {
      const products = fs.readFileSync("Assignment/CrudInFS/products.json");

      console.log(products.toString());

      
      res.write(JSON.stringify(reqUrl.query))

    }
  })
  .listen(4000, () => {
    console.log("Server is LIstening in Port 4000");
  });
