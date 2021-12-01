const { products } = require("./Products");

const http = require("http");
const url = require("url");
const fs = require("fs");
http
  .createServer((req, res) => {
    // const products = fs.readFileSync("Assignment/CrudInFS/Products.js");

    // console.log(products.toString());

    const reqUrl = url.parse(req.url, true);
    console.log("urllll", reqUrl);
    console.log("req url", req.url);
    const path = reqUrl.pathname;
    console.log("path", path);

    if (path === "/products" && req.method === "GET") {
    //   const products = fs.readFileSync("Assignment/CrudInFS/Products.js");

    //   console.log(products.toString());
      const all = JSON.stringify(products);
      console.log("all products", all);
      res.end(JSON.stringify(products));
    }
    //http://localhost:4000/products/?id=3&name=car&model=Nexon&price=12000
    else if (path === "/products" && req.method === "POST") {
    //   const products = fs.readFileSync("Assignment/CrudInFS/Products.js");

    //   console.log(products.toString());

      // console.log('productsCopy',productsCopy);
      products.push(reqUrl.query);
      // console.log('productsCopy',productsCopy);
      // const data=JSON.stringify(productsCopy)
      // console.log('data',data);

      fs.writeFileSync(
        "./Products.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
      // fs.appendFileSync('./Products.js',`const products = ${JSON.stringify(products)}; `)

      res.end(JSON.stringify(products));
    } else if (path === "/products" && req.method === "PUT") {
    //   const products = fs.readFileSync("Assignment/CrudInFS/Products.js");

    //   console.log(products.toString());
      const id = reqUrl.query.id;
      const index = products.findIndex((product) => {
        return product.id === reqUrl.query.id;
      });
      console.log(index);
      products.splice(index, 1, reqUrl.query);
      fs.writeFileSync(
        "./Products.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
      // products.splice(index,1,reqUrl.query)
      res.end(JSON.stringify(products));
    } else if (path === "/products" && req.method === "DELETE") {
    //   const products = fs.readFileSync("Assignment/CrudInFS/Products.js");

    //   console.log(products.toString());
      const id = reqUrl.query.id;
      const index = products.findIndex((product) => {
        return parseInt(product.id) === parseInt(id);
      });
      console.log(index);
      products.splice(index, 1);
      fs.writeFileSync(
        "./Products.js",
        `const products = ${JSON.stringify(
          products
        )}; module.exports={products}`
      );
      res.end(JSON.stringify(products));
    }

    console.log("server is running!!!!!");
  })
  .listen(4040, () => {
    console.log("Server is LIstening in Port 4040");
  });
